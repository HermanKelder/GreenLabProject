from os import system

system("adb tcpip 5555")
system("adb connect 192.168.40.252:5555")
