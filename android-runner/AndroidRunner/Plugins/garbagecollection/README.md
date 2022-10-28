# Garbage Collection Plugin
The garbage collection (GC) plugin gathers and counts GC log statements by searching in adb's logcat for logs that meet the format of a GC call as described [here](https://dzone.com/articles/understanding-android-gc-logs).

## Configuration
Below an example configuration is found:
```json
  "profilers": {
    "Garbagecollection": {
      "subject_aggregation" : "default"
    }
  }
```

**subject_aggregation** *string*
The default configuration for this plugin is the subject aggregation which lists the counted GC calls in a single file for easy further processing.

**experiment_aggregation** *string*
This plugin contains no default experiment aggregation.