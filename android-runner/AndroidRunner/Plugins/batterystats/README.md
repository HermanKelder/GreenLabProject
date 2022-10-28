# Batterystats Plugin
This plugin uses the `Batterystats` utility and estimates energy consumption via the algorithm proposed in [this article](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7884613&casa_token=oEEnY7XOip8AAAAA:AyRZxwboUh55-n9vmW5NGT62mL_hv85T4wPGWlDQGJ36VpF3bcAV1ufvYBhsYxlB0lIMOYJ_Hc-O&tag=1).

The thesis regarding the implementation of the Batterystats plugin can be found here:
https://drive.google.com/file/d/1O7BqmkRFRDq7AD1oKOGjHqJzCTEe8AMz/view?usp=sharing

## Dependencies and requirements
The following are required for the Batterystats plugin:
- Python2 to use Systrace
- power_profile.xml (retrievable from the device using [APKTool](https://github.com/iBotPeaches/Apktool); detailed installation instructions can be found [here](https://ibotpeaches.github.io/Apktool/install/)).  
- systrace.py (from the Android SDK Tools): `sudo apt update && sudo apt install android-sdk` for Ubuntu users
- A device that is able to report on the `idle` and `frequency` states of the CPU using systrace.py

Note: To check whether the the device is able to report on the `idle` and `frequency` states of the CPU, you can run the command `python2 systrace.py -l` and ensure both categories are listed among the supported categories.

## Configuration
Below, an example configuration can be found.
```json
  ...
  "powerprofile_path": "path",
  "systrace_path": "path",
  "profilers": {
    "batterystats": {
      "cleanup": true,
      "subject_aggregation": "default",
      "experiment_aggregation": "default",
      "enable_systrace_parsing": true,
      "python2_path": "python2"
    }
  }
```

**systrace_path** *string*
Path to Systrace.py. Example path: `/home/user/Android/Sdk/platform-tools/systrace/systrace.py`

**powerprofile_path** *string*
Path to power_profile.xml. Example path: `android-runner/example/batterystats/power_profile.xml`

**cleanup** *boolean*
Delete log files required by Batterystats after completion of the experiment. The default is *true*.

**enable_systrace_parsing** *boolean*
The Batterystats profiler uses the profiling tool Systrace internally to measure CPU specific activity and energy consumption on the mobile device. For some devices the parsing of the output of Systrace fails, causing the experiment run to fail. You can safely disable the Systrace parsing when you encounter Systrace parsing errors given that your experiment does not need rely on CPU specific information, but rather on the overall energy consumption of the mobile device. The overall energy consumption is not affected by the Systrace logs since it is tracked using another tool. The default is *true*.

**python2_path** *string*
The path to python 2 that is used to launch Systrace. The default is *python2*.

## Troubleshooting
### Devices have no permissions (udev requires plugdev group membership)
This happens when the user calling adb is not in the plugdev group.
#### Fix
`sudo usermod -aG plugdev $LOGNAME`
#### References
https://developer.android.com/studio/run/device.html

http://www.janosgyerik.com/adding-udev-rules-for-usb-debugging-android-devices/

### [Batterystats] IOError: Unable to get atrace data. Did you forget adb root?
This happens when the device is unable to retrieve CPU information using systrace.py.
#### Fix
Check whether the device is able to report on both categories `freq` and `idle` using Systrace:

`python2 systrace.py -l`

If the categories are not listed, use a different device.
#### References
https://developer.android.com/studio/command-line/systrace
