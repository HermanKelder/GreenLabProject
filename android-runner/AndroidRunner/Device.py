import logging
import os.path as op
import re
import time

from . import Adb
from .Adb import AdbError
from .util import ConfigError, makedirs
from . import Tests
import subprocess


class Device:
    LOGCAT_BUFFER_SIZE_MIN = 64
    LOGCAT_BUFFER_SIZE_MAX = 262144 # 256MB = 256 * 1024KB = 262144KB
    LOGCAT_BUFFER_SIZE_DEFAULT = 57344 # 56MB = 56 * 1024KB = 57344KB since Nexus 5X has limit of 56MB.

    def __init__(self, name, device_id, settings):
        self.logger = logging.getLogger(self.__class__.__name__)
        self.name = name
        self.id = device_id
        self.root_unplug = settings.get('root_disable_charging', False)
        self.root_unplug_value = settings.get('charging_disabled_value', None)
        self.root_unplug_file = settings.get('usb_charging_disabled_file', None)
        self.root_plug_value = None
        self.power_device = settings.get('power_device', None)
        self.device_settings_reqs = settings.get('device_settings_reqs', None)
        if self.power_device:
            subprocess.call([self.power_device["py_path"], self.power_device["script_path"], self.power_device["vout"], self.power_device["serial_num"]])
        Adb.connect(device_id)

        # Set logcat buffer size for the device based on logcat_buffer_size set in the config file. If it is not
        # defined use the default value.
        self.logcat_buffer_size = settings.get('logcat_buffer_size', Device.LOGCAT_BUFFER_SIZE_DEFAULT)

    @property
    def logcat_buffer_size(self):
        return self._logcat_buffer_size

    @logcat_buffer_size.setter
    def logcat_buffer_size(self, size):
        """ Sets the logcat buffer size for the current device.


        Parameters
        ----------
        size : int
            The size of the logcat buffer in KiloBytes (1024 bytes).
            Minimum size is 64KB
            Maximum size is 256MB (262144KB as 256 * 1024). While the maximum size differs from device to device, 256MB
            is considered to be the upper limit.

        Returns
        -------
        None
        """
        if not isinstance(size, int):
            raise ConfigError("Given logcat buffer size needs to be an integer.")

        if not Device.LOGCAT_BUFFER_SIZE_MIN <= size <= Device.LOGCAT_BUFFER_SIZE_MAX:
            raise ConfigError(f"Given logcat buffer size is {size}KB. It should be"
                              f" between {Device.LOGCAT_BUFFER_SIZE_MIN}KB"
                              f" and {Device.LOGCAT_BUFFER_SIZE_MAX}KB (inclusive).")

        self.logger.info(f'Setting logcat buffer size to {size}K')
        self._logcat_buffer_size = size

        # Please note that logcat uses K to refer to KB.
        Adb.shell(self.id, f'logcat -G {self._logcat_buffer_size}K')

    def configure_settings_device(self, app, enable=True):
        if self.device_settings_reqs is not None:
            settings_for_app = self.device_settings_reqs.get(app, None)
            if settings_for_app is not None:
                num_settings = len(settings_for_app)
                for setting in range(num_settings):
                    self.logger.info('Enabling ' + str(settings_for_app[setting])) if enable else self.logger.info('Disabling ' + str(settings_for_app[setting]))
                    Adb.configure_settings(self.id, settings_for_app[setting], enable)

    def get_version(self):
        """Returns the Android version"""
        return Adb.shell(self.id, 'getprop ro.build.version.release')

    def get_api_level(self):
        """Returns the Android API level as a number"""
        return Adb.shell(self.id, 'getprop ro.build.version.sdk')

    def is_installed(self, apps):
        """Returns a boolean if a package is installed"""
        return {app: app in self.get_app_list() for app in apps}

    def get_app_list(self):
        """Returns a list of installed packages on the system"""
        return Adb.list_apps(self.id)

    def install(self, apk):
        """Check if the file exists, and then install the package"""
        if not op.isfile(apk):
            raise AdbError("%s is not found" % apk)
        Adb.install(self.id, apk)

    def uninstall(self, name):
        """Uninstalls the package on the device"""
        Adb.uninstall(self.id, name)

    def su_unplug(self, restart):
        """Root unplugs the device"""
        self.root_plug_value = Adb.shell_su(self.id, 'cat %s' % self.root_unplug_file)
        if 'su: not found' in self.root_plug_value:
            raise AdbError("%s %s: is not rooted" % (self.id, self.name))
        if 'No such file or directory' in self.root_plug_value:
            raise ConfigError('%s %s: the root unplug file seems to be invalid' % (self.id, self.name))
        if restart:
            self.check_plug_value()
        Adb.shell_su(self.id, 'echo %s > %s' % (self.root_unplug_value, self.root_unplug_file))

    def check_plug_value(self):
        """Checks the root plug value for validity, if it's not valid it tries to make it valid"""
        if isinstance(self.root_unplug_value, (int, int)):
            try:
                self.root_plug_value = int(self.root_plug_value)
            except ValueError:
                logging.info('Error setting root plug value, check manually after experiment if charging is enabled')
        if self.root_plug_value == self.root_unplug_value:
            try:
                self.root_plug_value = abs(self.root_plug_value - 1)
            except TypeError:
                if 'enabled' in self.root_plug_value:
                    self.root_plug_value = 'disabled'
                elif 'disabled' in self.root_plug_value:
                    self.root_plug_value = 'enabled'

    def unplug(self, restart):
        """Makes the device to think it is unplugged, so the Doze mode can be activated"""
        if self.root_unplug:
            self.su_unplug(restart)
            self.logger.info('Root unpluged')
        else:
            self.logger.info('Default unplug')
            if int(self.get_api_level()) < 23:
                # API level < 23, 4.4.3+ tested, WARNING: hardcoding
                Adb.shell(self.id, 'dumpsys battery set usb 0')
                # Adb.shell(self.id, 'dumpsys battery set ac 0')
                # Adb.shell(self.id, 'dumpsys battery set wireless 0')
            else:
                # API level 23+ (Android 6.0+)
                Adb.shell(self.id, 'dumpsys battery unplug')

    def su_plug(self):
        """Reset the power status of the device if root unpluged"""
        self.logger.info('Root pluged, please check if device is charging')
        Adb.shell_su(self.id, 'echo %s > %s' % (self.root_plug_value, self.root_unplug_file))

    def plug(self):
        """Reset the power status of the device"""
        # if self.get_api_level() < 23:
        # API level < 23, 4.4.3+ tested, WARNING: hardcoding
        # reset only restarts auto-update
        #    Adb.shell(self.id, 'dumpsys battery set usb 1')
        # API level 23+ (Android 6.0+)
        if self.root_unplug:
            self.su_plug()
        Adb.shell(self.id, 'dumpsys battery reset')

    def current_activity(self):
        """Newer Android 10 does not have mCurrentFocus and mFocusedApp. Different approach to get the current activity"""
        recent_activity = Adb.shell(self.id,'dumpsys activity recents | grep "Recent #0" | cut -d "=" -f2 | grep -o -p "[a-z|.]*"')

        if recent_activity:
            result = recent_activity
            self.logger.debug('Current activity: %s' % result)
            return result
        else:
            self.logger.error(f'Results from dumpsys: {recent_activity}')
            raise AdbError('Could not parse activity from dumpsys')

    def launch_package(self, package):
        """Launches a package by name without activity, returns instantly"""
        # https://stackoverflow.com/a/25398877
        result = Adb.shell(self.id, 'monkey -p {} 1'.format(package))
        if 'monkey aborted' in result:
            raise AdbError('Could not launch "{}"'.format(package))

    def launch_activity(self, package, activity, action='', data_uri='', from_scratch=False, force_stop=False):
        """Launches an activity using 'am start', returns instantly"""
        # https://developer.android.com/studio/command-line/adb.html#am
        # https://developer.android.com/studio/command-line/adb.html#IntentSpec
        # https://stackoverflow.com/a/3229077
        cmd = 'am start'
        if force_stop:
            cmd += ' -S'
        if action:
            cmd += ' -a %s' % action
        cmd += ' -n %s/%s' % (package, activity)
        if data_uri:
            cmd += ' -d %s' % data_uri
        # https://android.stackexchange.com/a/113919
        if from_scratch:
            cmd += ' --activity-clear-task'
        return Adb.shell(self.id, cmd)

    def force_stop(self, name):
        """Force stop an app by package name"""
        Adb.shell(self.id, 'am force-stop %s' % name)

    def clear_app_data(self, name):
        """Clears the data of an app by package name"""
        Adb.clear_app_data(self.id, name)

    def logcat_to_file(self, path):
        """Dumps the last x lines of logcat into a file specified by path"""
        makedirs(path)
        with open(op.join(path, '%s_%s.txt' % (self.id, time.strftime('%Y.%m.%d_%H%M%S'))), 'w+') as f:
            f.write(Adb.logcat(self.id))

    def logcat_regex(self, regex):
        return Adb.logcat(self.id, regex=regex)

    def push(self, local, remote):
        """Pushes a file from the computer to the device"""
        return Adb.push(self.id, local, remote)

    def pull(self, remote, local):
        """Pulls a file from the device to the computer"""
        return Adb.pull(self.id, remote, local)

    def shell(self, cmd):
        """Runs the device shell with command specified by cmd"""
        return Adb.shell(self.id, cmd)

    def __str__(self):
        return '%s (%s, Android %s, API level %s)' % (self.name, self.id, self.get_version(), self.get_api_level())
