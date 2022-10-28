# Trepn Plugin
This plugin collects data via the Trepn profiler, e.g., power consumption, battery temperature, CPUs frequency.
The plugin depends on the [Trepn Android app](./com.quicinc.trepn.apk) being installed on the device.

## Configuration
Below an example configuration is found:
```json
  "profilers": {
    "trepn": {
      "preferences": {
        "profiling_interval": 100,
        "battery_power_source_selection": "Direct Power"
      },
      "data_points": ["battery_power", "mem_usage"]
    }
  }
```

**preferences** *Map<string, any>*
The preferences and configurations set in the Trepn profiler.
Defined in a map of `<preference_name, preference_value` pairs.
The available preferences and their default values are listed in [preferences.xml](./preferences.xml).
The `preference_name` refers to the preference substring after the last dot. 
For instance, the Trepn preference `com.quicinc.preferences.general.profiling_interval` is mapped in the user JSON configuration file using `profiling_interval`.
Currently, AR does not validate the override values, so make sure they are correct.

| Preference name                  | Valid values                                                   | Description                                                   |
|----------------------------------|----------------------------------------------------------------|---------------------------------------------------------------|
| `battery_power_source_selection` | [`Auto-Select`, `Estimate Power Consumption`, `Direct Power` ] | Source used to measure the battery power                      |
| `profiling_interval`             | positive integer higher than 0                                 | The rate in ms in which the selected data points are measured |

**data_points** *Array<string>* 
The types of data that should be measured defined in an array of string enums. Possible options are listed in [data_points.json](./data_points.json).

**subject_aggregation** *string*
TODO: default subject aggregation

**experiment_aggregation** *string*
TODO: default experiment aggregation