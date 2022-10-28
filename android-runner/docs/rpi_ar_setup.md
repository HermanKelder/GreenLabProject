# Setting up Android Runner on the Raspberry Pi
When running experiments using Android Runner (AR) on your computer it is adviceable to not use your computer for any other tasks as it could influence the measurements and therefore the results. However, running experiments often consumes a lot of time resulting in a big period in which you cannot use your computer giving you a loss of productivity.

A way to circumvent this problem is by running Android Runner on a Raspberry Pi (RPi), a single-board, low cost, credit-card sized computer. That way, you can simply run Android Runner on the RPi and use your computer for all other activities.

In this guide we describe how you can setup AR on a RPi. We will show you how to install and configure the Raspberry Pi OS, the required software as well as how to make the (micro) SD-card, used by the RPi as non-volatile memory, read only to prevent SD card corruption. In addition we show how to configure an external disk which you can use for your data and some general tips & tricks.


Things you will need:
- A RPi with accessories (e.g. a (micro) SD-card, adapter, preferably an ethernet cable)
      
    Please note that the instructions in this guide are based a Raspberry Pi 4B.
- An external USB/SSD or HDD drive that you are possibly willing to format.


## Installing the OS
First we will install the Raspberry PI OS (32-bit) with the Raspberry Pi Desktop. The quickest way to do this is to use [Raspberry Pi Imager](https://www.raspberrypi.org/software/), a quick and easy way to install Raspberry Pi OS and other operating systems to a microSD card. On Linux you can install Raspberry Pi Imager by running the following command:
```
sudo apt install rpi-imager
```
Then start RPi Imager, select **Raspberry Pi OS (32-bit)** *"A port of Debian with the Raspberry Pi Desktop (Recommended)"* as your operating system and choose your inserted micro SD-card as storage.

If you press CTRL + SHIFT + X you can preconfigure the OS. Since we want to use the RPi as a headless computer (i.e. not using a monitor or keyboard to run your Pi but using it through SSH or VNC) it is adviceable to Enable SSH so provide a password (preferably "androidrunner") for the pi user. You can also configure the WiFi but we advice you to use an ethernet connection as it provides more stability. 

Finally click "write".

Next insert the micro SD-card into the RPi and start the Pi. Make sure it is connected to the internet (or at least your local network) by either ethernet (preferable) or WiFi.

To get the RPis local IP address login to your routers settings (very often it is 192.168.1.254 or 192.168.1.1) using your browser and search for the router's DHCP lease allocation table. There you will find the local IP address of the RPi.

Finally, connect to the RPi from your own computer by running the following command:
```
ssh pi@192.168.1.x
```
Of course replacing the 192.168.1.x with the IP address of the RPi on your local network. Then type in the password and you are in!

If you want you can configure the RPI some more by running the following command in the SSH shell:
```
sudo raspi-config
```
It might handy for example to enable VNC so you can remotely control the desktop interface of the RPi from your own computer. See [here](https://www.raspberrypi.org/documentation/remote-access/vnc/) for more info on how to do that.

It is also adviceable to give your RPi a static IP address so it doesn't change. Broadly speaking there are 2 ways do this:
1. Most routers provide DHCP reservation which, if enabled, will always give out the same IP address to a device based on its MAC address. To set this up check your routers manual.
2. Manually set the IP on the RPi by changing some configuration files on the RPi. A way to do this can be found [here](https://thepihut.com/blogs/raspberry-pi-tutorials/how-to-give-your-raspberry-pi-a-static-ip-address-update).

We personally recommend to use DHCP reservation because you can then manage everything from one place. 

## Installing the required software
Next we will install all the required software that are necessary to run AR (we will install AR itself later).

1. Install Android Debug Bridge (ADB): `sudo apt install android-tools-adb`
2. Install the Android SDK: `sudo apt install android-sdk`
3. Install MonkeyRunner: `sudo apt install monkeyrunner`
4. Install JDK8: `sudo apt install openjdk-8-jre`
5. Then set Java 8 as the default Java version by following the commands shown [here](https://askubuntu.com/questions/740757/switch-between-multiple-java-versions).
6. Install ubhubctl: `sudo apt install uhubctl`
7. Install Python LXML: `sudo apt install python-lxml`
8. Install tmux, not necessary perse but its very handy when running AR experiments headless: `sudo apt install tmux`

If you want to use the BatteryStats profiler you will need to install systrace. This was usually provided by the android-sdk package but its not lately so we need to install it manually. To do this:

1. Download the Android platform tools for Linux from here: https://developer.android.com/studio/releases/platform-tools You can use `wget https://dl.google.com/android/repository/platform-tools-latest-linux.zip` on the headless RPi. You can also download it on your own computer and then use scp or rsync for example to transfer it to the RPi.
2. Unzip this archive: `unzip platform-tools-latest-linux.zip`
3. Then move into the created directory `cd platform-tools` and copy the systrace folder to the android-sdk/platform-tools folder `cp -R systrace /usr/lib/android-sdk/platform-tools`
4. Next we need to chmod this systrace folder and its contents so run `sudo chmod -R 777 /usr/lib/android-sdk/platform/tools/systrace`

Then when using BatteryStats provide the following path in the AR config file for the option systrace_path e.g.: `"systrace_path": "/usr/lib/android-sdk/platform-tools/systrace/systrace.py"`

## Configuring the external disk
The RPi uses a micro SD-card for non-volatile storage which varies in size (starting from 8GB) and is not designed for 24/7 write operations. As a result it happens very often that the SD-card gets full because the RPi writes a lot of logs or even worse the SD-card becomes corrupted. To solve this issue we will make the SD-card read only and use an external USB/SSD/HDD to store our experiment data.

To do this we will have to prepare the external disk and mount it correctly. So get an external SSD/SSD/HDD disk that you are willing to format (thus deleting all its data).
We need to format the external disk so it uses the ext4 file system as a lot of other file systems do not support symlinks like ExFat or FAT32. To format your disk you can also use a GUI tool like GParted on Linux but here CLI commands are shown:

1. Connect the external disk to your Pi and run the `sudo lsblk -f` command to get some more info about the external disk.
2. Choose the partition on the external disk that you want to format, for example /dev/sdb1, and run:
`sudo mkfs -t ext4 /dev/sdb1`
3. Next create a directory at which you want to mount the external disk for example: `sudo mkdir /home/pi/external_memory`
4. Run the lsblk command to get the UUID of the external disk: `sudo lsblk -f`.
5. Next we modify the fstab file to define the location where the external disk will be automatically mounted when the RPi starts up. Use vim or nano to open the /etc/fstab file: `nano /etc/fstab`.
6. Append the following line to the /etc/fstab file:
`UUID=<your_disks_uuid> /home/pi/external_memory ext4 defaults,auto,users,rw,nofail,exec 0 0` where you ofcourse replace <your_disks_uuid> with the UUID you found in step 4. It is very important that `exec` is the last entry in the options list. For more options or an explanation please see [this web page](https://help.ubuntu.com/community/Fstab).

## Make the (micro) SD-card read-only
We can now make the micro SD-card read-only. To do that we will use OverlayFS. This means that the root filesystem is protected from writes while still allowing all applications to function as normal while writing to a temporary Overlay filesystem.   This means all filesystem writes are stored to RAM and conveniently cleared when the RPi is restarted. This only applies to the SD-card however, all writes to the external disk are kept completely! To make the SD-card read-only:

1. Run `sudo raspi-config`
2. Go to **Performance Options**
3. Select **P3 Overlay File System** and press Enter.
4. Select **Yes** when prompted with *Would you like the overlay file system to be enabled?*
5. When asked whether to make the boot partition read-only as well also select **Yes**.
6. Select **Finish** and choose **Yes** when asked whether you want to reboot.

**Note: If you want to install packages or make changes to your RPi OS configuration you will need to first disable this read-only mode otherwise the changes will be lost when you restart the RPi.**

To disable the read-only mode simply follow the first 3 steps as described above but instead of selecting Yes select **No**. 

## Setup AR
Now we can finally setup the Android Runner on the RPi. We will install AR on the external disk since it of course writes to files. To do this:

1. Go to the folder your external disk is mounted: `cd /home/pi/external_memory`
2. Use git clone to download the repo: `git clone https://github.com/S2-group/android-runner.git` and type `cd android-runner` to enter the AR main folder. 
4. Create Python virtual environment: `python3 -m venv .venv`
5. Then activate the Python virtual environment: `source .venv/bin/activate`
6. Install the required Python packages: `python3 -m pip install -r requirements.txt`.

## Tips & Tricks
* **Keeping experiments running when closing the SSH connection:** When starting an experiment using AR over SSH the problem is that when you close the SSH session the processes you started on the RPi during that SSH session will stop as well, thus stopping your experiment. A way to solve this is to use tmux, a terminal multiplexer. When starting a tmux session you can exit a session at any moment and later reattach to that session while the process kept running. 

  1. To start tmux run `tmux` when you are connected to the RPi via SSH. Then just run the commands you always run.
  2. When you want to detach from the session press `CTRL+B` followed by `d`.
  3. You can then later reattach to this session by getting the name of your session using `tmux ls` and then typing `tmux at -t <name>` where `<name>` is the name of the session, usually 0 when you have just 1 session.

   This then allows you to start an experiment, disconnect from the RPi while leaving the experiment running and check the output when needed.
