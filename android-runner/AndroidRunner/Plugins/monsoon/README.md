# Monsoon Plugin

Automated tests using a Monsoon Power Monitor with Android Runner and [Luis Cruz](https://scholar.google.com/citations?user=O13oaH0AAAAJ&hl=en)'s [Physalia](https://tqrg.github.io/physalia/).

## Device Preparation
Follow Luis's [tutorial](https://tqrg.github.io/physalia/monsoon_tutorial.html) for preparing an LG Nexus 5X.  Other devices should be able to work if configured similarly.

## Install
Follow the instructions in Luis's Physalia [repository](https://github.com/tqrg/physalia) or Android Runner's [version](https://github.com/EricZielinski/physalia), which includes a small change to the energy consumption calculation to include voltage.

## Monsoon Setup
In total, 6 wires and cables will be needed:
* 2 wires hooked up to the phone and Monsoon's banana connectors (red and black).
* The phone's USB connected to the front of the Monsoon's USB-A port.
* A USB-A/B connected to workstation and to the front of the Monsoon.  This allow for adb connections to go from wired to wireless seamlessly.
  * Leave cable unplugged from the host machine if the test device hasn't yet been connected via adb to the host machine.  Plug it into host machine after executing Android Runner's Monsoon plugin.
  * Leave it plugged into host machine otherwise.
* A USB A/B connected to the back of the Monsoon needs to be connected to host machine. This is the how the host machine will communicate to Monsoon to power the device.
* A power cable from the back of the Monsoon to a power source.

Note, it's advised to not use a USB hub for optimal performance.

Turn on Monsoon.

## Configuring Device Settings with First Test Run
The plugin's user configuration differs from other plugins in the framework.  This is because there's no guarantee that Monsoon is already providing power to the device, which will be the case when the Monsoon is turned on.  Because of this, the plugin is configured under the device section of the configuration file instead of the profiler section.

The configuration file should look something like this:
```
{
...
  "devices": {
    "nexus5x": {
      "power_device": {
        "script_path":"my_path/androidrunner/android-runner/AndroidRunner/Plugins/monsoon/script/power_device.py",
        "py_path": "python3",
        "vout": "3.8",
        "serial_num": "23171"
      }
    }
...
  "profilers":{
    "monsoon": {
        }
...
}
```
If using a **Python3 virtual environment**, the `py_path` field must be changed to reflect the virtual environment's Python binary (ex: `"py_path": "my_path/venv/bin/python"`.  **Most phones operate normally between 3.8 and 4.2 volts.**

Follow these instructions to power on the phone:
1. Leave the USB-A/B passthrough cable disconnected from host machine.  Note, this is the cable that connects to Monsoon next to the Nexus 5X's USB cable.  
2. Execute `sudo my_path/venv/bin/python3 android-runner android-runner/examples/monsoon/config.json` or whatever configuration path is relevant.  If not using a virtual environment, `sudo python3 ...`.
3. Turn on the Android device once terminal output shows *Monsoon is ready*.
4. Ignore the terminal output; the point of this exercise is to power on the device and configure it - not to run experiments just yet.  Wait for phone to boot up.
5. Ensure the time settings are correct.
6. Enable *Developer Options*.  *Open Settings -> About Phone -> Build Number* and then tap several times.
7. Connect to the local WiFi network.  Make note of the device's IP address and enter that into Android Runner's `devices.json` file along with port 5555.  See below:
```
{
  "nexus5x": "192.168.2.7:5555"
}
```
8. Disable lock screen in *Security*.  The screen will turn off after a maximum of 30 minutes, so the plugin will ensure that the screen wakes up before every run.  It will also cause the screen to go asleep after every run.  The *Stay Awake* settings under *Developer Options* applies only to devices that are in a charging state, which doesn't apply to Monsoon-configured devices during profiling.
9. Under *Display* options, make sure the run duration of any future experiment doesn't exceed the screen timeout (max 30 minutes), plus an extra minute or so to account for sleep calls.

## Things to know before running first real experiment
1. The field `reset_adb_among_runs` should either be set to *false* or not be included in the configuration file.
2. The `duration` of each run must not exceed 30 minutes, or 1,800,000 milliseconds if the phone screen needs to be on during the experiment.  
3. It is advisable to keep the time period between the "profiler stop" event and "profiler start" event (so including the before_close, after_run, before_run and after_launch phases) not to exceed 30 minutes. Note, `time_between_run` **is** affected by this requirement. If this requirement is not satisfied some commands send to the device may freeze the execution of AR.
4. Don't forget to add the phone's IP address and port to `devices.json`.
5. For best stability, make sure the device is as close to the router as possible.  The device may disconnect from the adb server if the WiFi connection isn't stable.
6. It's not required to turn off Monsoon before changing the `vout` field.  Monsoon can adjust that while it's powered on.
7. The script will create a csv file in the same directory that will get overwritten every time an experiment is run.  

## Running the experiment
It's time to run a real experiment.
1. Terminate the adb server if one exists.  Leave USB passthrough unplugged from host machine.
2. Execute Android Runner using the path to the experiment's configuration file.
3. Once the phone is booted and connected to WiFi, connect USB passthrough to host machine.  Physalia will first connect to the device via USB adb. It will then connect to it via WiFi adb.
4. The experiment will be automated from this point on.  
5. The device will remain connected to adb over WiFi after the experiment is over, so any future experiments can be run without disconnecting or reconnecting any cables if desired.

## Results
Physalia will provide joules, the duration in milliseconds and an error flag field per run with a default sampling rate of 5 kHz.  The `error_flag` will be set to *False* if Monsoon’s `sampleEngine` returns a list of lists that contains timestamps, current and voltage. The results will be saved and aggregated from the experiment standpoint and also from the subject standpoint.  The mean of each subject will *not* be provided in the output.

## Troubleshooting
**usb.core.USBError: [Errno 32] Pipe error**\
Restart the Monsoon.  Likely the result of the device disconnecting from the adb server while Monsoon is profiling.\

**Phone turned on but is losing power**\
Increase the voltage.  Ensure time settings are correct.\

**Phone Stuck in Bootloop**\
The Nexus 5X phone has a few bugs within the hardware/firmware that can sometimes brick the phone unexpectedly.  It's recommended to perform a factory reset via fastboot and twrp to see if that fixes the bootloop before trying other more extreme measures.\

**Experiment Not Progressing**\
Occasionally, the test device may go offline in WiFi mode and transition to dropping the connection while the adb server is still up.  Terminate the experiment, re-establish the adb connection with test device and use the experiment's progress xml file to restart where it hanged.\

**ImportError: bad magic number in 'physalia': b'\x03\xf3\r\n'**

Clear up Python compiled bytecode files (`.pyc` files) by running

```
find . -name \*.pyc -delete
``` 

**Failing to recognize the mobile device**

This might be caused by not having ADB in the location `/usr/bin/adb`.
A quick fix is simple copying ADB to this location.
You can find ADB in the Android SDK directory.

**Other Errors/Warnings**\
Type `adb kill-server` before running a new experiment.  Let Physalia create the adb server.  Restart the Monsoon if all else fails.     


## Known Stability Issues
As of yet the stability of the Monsoon plugin in Android Runner is still not optimal. There are 3 known issues:

1. **The execution freezes but no "real" error is thrown.** This is presumably caused by the fact that the device is connected over WiFi. In some cases commands send over WiFi to the device will block and thus freeze the execution. This problem often occurs when the device is put to sleep and needs to be woken up. 

    This issue can be reproduced outside the context of Android Runner with [this](https://gist.github.com/odmnk/c8fe76230265ac20bf2ef8afe775d9b1) script. First connect your device to your PC using USB and get its device id using `adb devices` and set that as the `DEVICE_ID` value in the script. Then run the script. Everything should work fine.
    
    Now connect your device with ADB over WiFi as described [here](https://medium.com/myriatek/using-adb-on-wifi-for-android-development-fe407a6db712) then completely disconnect the USB cable from your device so its only connected over WiFi. Then change the `DEVICE_ID` value to your device's local IP and port and run the script again. We can then see that it will sometimes block execution and thus freezes. We can resume the execution by manually turning on the device but this is unacceptable of course.


   To solve this issue we can make sure Android Runner (AR) sends all commands to the device over USB when AR is NOT profiling and send the commands over WiFi when the device is profiling. [This](https://gist.github.com/odmnk/58b95868dffb5792f2648b88a0f61120) patch implements a very nasty and hardcoded hack to do this. Please note that this patch is not production ready. It essentialy writes the state of AR (profiling or not profiling) to a file and based on that sends commands over USB or disables USB and sends them over WiFI. This drastically reduces the amount of time under which the error can occur. However, the error described below (2) is still present.
2. **The following error is thrown: AndroidRunner.Adb.AdbError: error: device 192.168.x.x not found.** This probably happens because the WiFi connection from or to the device is lost during profiling. In this situation `adb devices` also returns nothing. It usually takes some trial and error to get the device connected again. We can then manually restart the experiment (using progress.xml). However, shortly after restarting the experiment we always get the following error discussed below (3).
3. **The following error usb.core.USBError: [Errno 32] Pipe error.** As described above (in the Troubleshooting section) this is probably caused by the device disconnecting from the ADB server while the Monsoon is profiling. The only way we have found to fix this issue is to simply restart the Monsoon and then restart the experiment.

A starting point for a possible solution to the issues above would perhaps be to send all commands to the device over USB,only sending commands over WiFi during the profiling itself. Then during the profiling, monitor the output of `adb devices` and try to reconnect to the device when the device is not found in the output. However, the problem is that there is not a step by step way to reconnect to the device, if often takes some trial and error and thus can be difficult to programatically solve. In addition, after finally reconnecting to the device, shortly thereafter we always get the USBError which we can only solve by restarting the Monsoon. To solve this issue it might be neccesary to dive into the Physalia source code.



