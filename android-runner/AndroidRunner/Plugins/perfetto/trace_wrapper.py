import subprocess
import platform
import pandas as pd
from io import StringIO

class PerfettoTrace(object):
    def __init__(self, trace_path, trace_processor_path):
        """ Inits PerfettoTrace with the trace_path and trace_processor_path.

        Parameters
        ----------
        trace_path : string
            Path to the perfetto trace file you want to query.
        trace_processor_path : string
            Path to the trace_processor executable file.

        Returns
        -------
        None
        """
        self.trace_path = trace_path
        self.trace_processor_path = trace_processor_path

        # Since trace_processor executable only works on x86 based architectures give an error when running this script on ARM based machine.
        if "arm" in platform.uname().machine:
            raise PerfettoTraceException("Trace processor is not yet supported on ARM.")

    def query(self, query):
        """ Runs query on trace file and returns data as Pandas object.

        Parameters
        ----------
        query : string
            Query that is run on the perfetto trace file.

        Returns
        -------
        pandas.DataFrame
            Pandas dataframe containing the results of the query.
        """
        proc = subprocess.Popen([self.trace_processor_path, "-q", "/dev/stdin", self.trace_path], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = proc.communicate(input=query.encode("ascii"))

        if stderr:
            raise PerfettoTraceException(stderr.decode("ascii"))
        data = pd.read_csv(StringIO(stdout.decode('ascii')))
        return data

class PerfettoTraceException(Exception):
    pass




