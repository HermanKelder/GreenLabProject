from AndroidRunner import Tests
from AndroidRunner.Plugins.Profiler import Profiler
from AndroidRunner.Plugins.Profiler import ProfilerException
import subprocess
import os
from AndroidRunner import util
import os.path as op
import datetime
from AndroidRunner import Adb
from AndroidRunner import util

class Perfetto(Profiler):
    """
    Directory used for storing perfetto config files and perfetto traces on the device.
    Other (including nested) directories will not work due to strict SELinux rules.

    All paths that are on the device are suffixed with device_path 
    """
    PERFETTO_CONFIG_DEVICE_PATH = "/sdcard/perfetto/"
    PERFETTO_TRACES_DEVICE_PATH = "/data/misc/perfetto-traces/"

    def __init__(self, config, paths):
        """ Inits the Perfetto class with config and paths params.

        Parameters
        ----------
        config : collections.OrderedDict 
            OrderedDictionary that contains the Perfetto plugin settings as provided by the given config.json file.
        - paths  : dict
            Dictionary that contains the ROOT_DIR path, CONFIG_DIR path, OUTPUT_DIR path, ORIGINAL_CONFIG_DIR path and BASE_OUTPUT_DIR path.
        """
        super(Perfetto, self).__init__(config, paths)

        self.paths = paths
        self.perfetto_trace_file_device_path = ""

        self.perfetto_config_file_local_path = config["config_file"]
        self.perfetto_config_file_format = config.get("config_file_format", "text")
        self.perfetto_config_file_device_path = ""

        self.adb_path = util.load_json(op.join(self.paths["CONFIG_DIR"], self.paths['ORIGINAL_CONFIG_DIR'])).get("adb_path", "adb")

    def dependencies(self):
        return []

    def load(self, device):
        """ Prepares the device for running the profiler.

        Parameters
        ----------
        - device : AndroidRunner.Device.Device
            device on which the profiler is ran.
        """

        if not os.path.exists(self.perfetto_config_file_local_path):
            raise util.ConfigError(f"Config file not found on host. Is {self.perfetto_config_file_local_path} the correct path?")
        # Construct path for perfetto config file on device.
        perfetto_config_filename = self.perfetto_config_file_local_path.split("/")[-1]
        self.perfetto_config_file_device_path = os.path.join(Perfetto.PERFETTO_CONFIG_DEVICE_PATH, perfetto_config_filename)
        
        # Copy perfetto config file to device at constructed path.
        device.push(self.perfetto_config_file_local_path, self.perfetto_config_file_device_path)

    def set_output(self, output_dir):
        self.output_dir = output_dir

    def start_profiling(self, device, **kwargs):
        """ Start profiling

        Parameters
        ----------
        - device : AndroidRunner.Device.Device
            device on which the profiler is ran.
        """
        # Construct perfetto trace file path on device.
        filename = self._datetime_now().strftime("%Y_%m_%dT%H_%M_%S_%f")
        self.perfetto_trace_file_device_path = os.path.join(Perfetto.PERFETTO_TRACES_DEVICE_PATH, f"{filename}.perfetto_trace")

        # Start perfetto in background (-d) so it immediately exits and continues recording trace in background.
        # It returns the PID of the perfetto process on the device.
        # Before Android 12 we cannot directly pass the trace config file to perfetto due to over-restrictive SELinux rules.
        # Instead, we have to pipe it to perfetto's stdin using cat. 
        perfetto_config_file_format_flag = "--txt" if self.perfetto_config_file_format == "text" else ""
        proc = subprocess.Popen([self.adb_path, "-s", device.id, "shell", 
            f"cat {self.perfetto_config_file_device_path} | perfetto --background {perfetto_config_file_format_flag} -c - -o {self.perfetto_trace_file_device_path}"],
            stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        out, err = proc.communicate() 
        if err:
            err = err.decode("ascii")
            raise ProfilerException(f"There was an error running Perfetto: {err}")

        # On Android 9 the PID is not returned so we "grep" it ourselves ;).
        if not out:
            pid = device.shell("ps -A | grep perfetto | awk '{print $2}'") 

            # We cannot convert it to int if there are more Perfetto processes.. So we throw an error.
            try:
                pid = int(pid)
            except ValueError:
                msg =  "Found more than one Perfetto process. If you are running Perfetto"\
                       "on an Android 9 device please set the duration_ms"\
                       "in the Perfetto trace configuration file."
                raise ProfilerException(msg)
            self.perfetto_device_pid = str(pid)
        else:
            self.perfetto_device_pid = out.decode("ascii")
 
    def stop_profiling(self, device, **kwargs):
        """ Stop profiling

        Parameters
        ----------
        - device : AndroidRunner.Device.Device
            device on which the profiler is ran.
        """
        # Stop the perfetto tracing session by killing the perfetto process on the device using the received pid.
        out = device.shell(f"kill {self.perfetto_device_pid}")

    def collect_results(self, device):
        """ Copy the profiling data from the device to the host. 

        Parameters
        ----------
        - device : AndroidRunner.Device.Device
            device on which the profiler is ran.
        """
        # Copy resulting trace files from device to host.
        # Before Android 9 we cannot directly pull the trace files from the device due to over-restrictive SELinux rules.
        # We therefore use cat and redirect its output to a file on the host machine. 
        filename = self.perfetto_trace_file_device_path.split("/")[-1]
        perfetto_trace_file_host_path = os.path.join(self.paths["OUTPUT_DIR"], filename)

        with open(perfetto_trace_file_host_path, "w") as f:
            proc = subprocess.Popen([self.adb_path, "-s", device.id, "shell", f"cat {self.perfetto_trace_file_device_path}"], stdin=subprocess.PIPE, stdout=f)
            (_, _) = proc.communicate()

        # Remove trace file from device since we already have it locally.
        device.shell(f"rm -f {self.perfetto_trace_file_device_path}")

    def unload(self, device):
        """ Remove files from device that were used for profiling.

        Parameters
        ----------
        - device : AndroidRunner.Device.Device
            device on which the profiler is ran.
        """
        # Delete perfetto config file from device.
        device.shell(f"rm -Rf {self.perfetto_config_file_device_path}")

    def aggregate_subject(self): # pragma: no cover
        # Since we require users to extract the data from the trace files themselves...
        pass

    def aggregate_end(self, data_dir, output_file): # pragma: no cover
        # Since we require users to extract the data from the trace files themselves...
        pass

    def _datetime_now(self):
        """ Returns the datetime.now() value: the current local date and time 
        Used since correctly patching datetime.datetime.now() can be cumbersome when unit testing.

        Returns
        -------
        datetime.datetime
            The current local date and time.
        """
        return datetime.datetime.now()