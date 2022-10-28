# Android Plugin
This plugin collects memory and CPU usage via the `cpuinfo` and `meminfo` Android utilities.                                                                                                                                                                                                            

## Configuration
Below, an example configuration can be found.
```json
  "profilers": {
    "android": {
      "sample_interval": 100,
      "data_points": ["cpu", "mem"],
      "subject_aggregation": "user_subject_aggregation.py",
      "experiment_aggregation": "user_experiment_aggregation.py"
    }
  }
```

**sample_interval** *int*
The sample interval in which the ADB commands are executed and the data points are gathered.

**data_points** *Array<string>* 
The types of data that should be measured defined in an array of string enums. Possible options are:
- `cpu` - collects the CPU usage as a percentage of the device's total CPU capacity at a given point in time.
- `mem` - collects the memory usage in KB at a given point in time. 

**subject_aggregation** *string*
TODO: default subject aggregation

**experiment_aggregation** *string*
TODO: default experiment aggregation