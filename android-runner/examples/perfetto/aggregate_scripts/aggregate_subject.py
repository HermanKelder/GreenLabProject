from AndroidRunner.Plugins.perfetto.trace_wrapper import PerfettoTrace
import os

def main(dummy, path):
    for perfetto_trace_file in os.listdir(path):
        trace =  PerfettoTrace(perfetto_trace_file, trace_processor_path="/home/pi/android-runner/AndroidRunner/Plugins/perfetto/trace_processor")
        data = trace.query("SELECT * FROM TABLE")
        