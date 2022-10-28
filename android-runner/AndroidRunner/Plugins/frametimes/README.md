# Frametimes Plugin
The frame times plugin gathers unique frame rendering durations (in nanoseconds) by utilizing `dumpsys gfxinfo framestats` and counts the amount of delayed frames that occurred following the 16ms threshold [defined by Google](https://developer.android.com/training/testing/performance).

## Configuration
Below an example of the configuration options is found:
```json
  "profilers": {
    "Frametimes": {
      "subject_aggregation" : "default",
      "sample_interval": 1000
    }
  }
```

**sample_interval** *int*
The sample interval is configurable but advised to keep under 120 seconds as the framestats command returns only data from frames rendered in the past 120 seconds as described [here](https://developer.android.com/training/testing/performance).
Shorter sample intervals will not cause duplication in the frames gathered as only unique frames are kept.

**subject_aggregation** *string*
The default subject aggregation consists of combining both the frametimes as the delayed frames count in single files for easy further processing.

**experiment_aggregation** *string*
This plugin contains no default experiment aggregation.