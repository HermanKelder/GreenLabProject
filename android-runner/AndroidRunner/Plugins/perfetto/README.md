# Perfetto Plugin
This plugin integrates Perfetto in Android Runner. [Perfetto](https://perfetto.dev/) is *a production-grade open-source stack for performance instrumentation and trace analysis. 
It offers services and libraries for recording system-level and app-level traces, native + java heap profiling, a library for analyzing traces using SQL and a web-based UI to visualize and explore multi-GB traces*.

Perfetto allows you to collect system-wide performance traces from Android devices from a variety of data sources concerning memory consumption, CPU utilization, power consumption and the general Android system. 

Perfetto is **only available for devices running Android 9 and higher**. It's enabled by default on devices running Android 11 and higher. On Android 9 and 10 you need to enable it manually by running the commands shown [here](https://perfetto.dev/docs/quickstart/android-tracing#starting-the-tracing-services).

## Perfetto Plugin Configuration
To use Perfetto inside Android Runner the user needs to provide Android Runner with 2 things through the  .json configuraton file.
- The path to the Perfetto trace configuration file. 
- The format of this file.

Perfetto trace configuration files can be passed to Perfetto in two formats. Either in binary format (.bin file) or in text format (usually the .pbtx format). **Devices running Android 9 only accept the binary format.** To translate a text format .pbtx trace configuraton file to the binary format you need to convert it using the protoc compiler. See the instructions [here](https://perfetto.dev/docs/concepts/config#pbtx-vs-binary-format) on how to do that.

In Android Runner's .json configuration file the following options are available for the Perfetto profiler:

| Setting name                     | Valid value(s)                                                   | Default Value(s) | Description                                                   |
|----------------------------------|----------------------------------------------------------------|--------------------|------------------------------------------|
| `config_file`                    | string|No default value| Path to the Perfetto trace configuration file. Either a .pbtx (text) or .bin (binary) file.|
| `config_file_format`             | `text` or `binary`                                             | `text`             | Format of the provided `config_file`. |

When the `config_file_format` option is not specified Android Runner assumes a `text` (.pbtx) file is passed.

In practice a configuration may look like this: 
```json
  "profilers": {
    "perfetto": {
        "config_file": "path/to/perfetto_trace_config.bin",
        "config_file_format": "binary"
    }
  }
```

## Perfetto Configuration
Please note the distinction between the Android Runner config file (usually config.json) and the Perfetto trace configuration file (either a .bin or .pbtx file). The AR config file only contains the path to the Perfetto trace configuration file while the Perfetto trace configuration file actually describes what should be profiled.

A Perfetto trace configuration file should at least consist of:

- One buffer which describes a place where the data can be written to.
- A datasource which describes what data should be gathered and how.

Please do not set the duration/runtime in the perfetto config file. Instead, set it in the Android Runner config file (duration). Only exception is when the device is running Android 9, see the limitations, issues & caveats section below.

For more info please check out the related [Perfetto documentation](https://perfetto.dev/docs/concepts/config) about configuration files.

## Processing the data
The tracefile for each run is placed in the AR output directory. If you would like to visually inspect the result of your trace(s) you can use [Perfetto UI](https://ui.perfetto.dev/), which enables you to view and analyze traces in the browser.

Since Perfetto provides a wide variety of data sources there is no simple solution to aggregate all the resulting data. Therefore its the task of the user to write a script that aggregates the data. These scripts can then be "attached" to Android Runner using the `subject_aggregation` and `experiment_aggregation` options in the profiler's config like this:
```json
  "profilers": {
    "perfetto": {
        "config_file": "path/to/perfetto_trace_config.pbtx",
        "subject_aggregation" : "Scripts/user_subject_aggregation.py",
        "experiment_aggregation" : "Scripts/user_experiment_aggregation.py",
        "
    }
  }
```
The `subject_aggregation` script is ran to aggregate all runs of a single subject. The `experiment_aggregation` script is ran to agregate all data just before the finish of the experiment.

The resulting Perfetto trace files are binary files that can be queried using SQL, just like a SQL database. To do this in your aggregation scripts you can use the PerfettoTrace class from AndroidRunner.Plugins.perfetto.trace_wrapper. For example:

```py
from AndroidRunner.Plugins.perfetto.trace_wrapper import PerfettoTrace

def main(dummy, path):
    trace =  PerfettoTrace(perfetto_trace_file, trace_processor_path="/home/pi/android-runner/AndroidRunner/Plugins/perfetto/trace_processor")
    data = trace.query("SELECT * FROM TABLE")
```
This will return the retrieved data in a [Pandas](https://pandas.pydata.org/) dataframe which can then be used to do the aggregation.

Right now you can only query Perfetto traces on x86 based platforms. On ARM based and other platforms this functionality is not available at the moment. If you are running Android Runner with Perfetto on an ARM based machine we suggest you to transfer the resulting traces to a x86 machine and run the aggregation scripts there.

For more info about trace processing please check the related [Perfetto documentation](https://perfetto.dev/docs/analysis/trace-processor).

## Limitations, Issues & Caveats
- The granularity of Perfetto's power measurements are too low for doing relatively short traces (less than several minutes). The measurements are accurate over the long run but the measurement system is not designed for high rate polling. This is a hardware limitation and there is no real way around this at the moment. We therefore suggest to use another profiler like [Trepn](../trepn), [Monsoon](../monsoon) or [Batterystats](batterystats) if you would like to use Android Runner for measuring energy consumption.
- On Android 9 and devices running earlier Android versions you need to specify the duration of your trace in the Perfetto trace configuration file using the `duration_ms` option (see [here]() for more info). This duration must be the same as the Android Runner config.js duration. This is due to restrictive SELinux rules. On devices using Android 10 and higher this is NOT necessary and we even recommend you to NOT specify the duration of you trace in the Perfetto trace configuration file and let AR handle it.
- Trace aggregation is only available on x64 based platforms. If you are running Android Runner and Perfetto on an ARM based device we suggest you to transfer the resulting traces to a x86 machine and run the aggregation scripts there. 
