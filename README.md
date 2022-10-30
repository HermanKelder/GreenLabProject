# GreenLabProject 2022 (CSS prefixes)

## Abstract
In this paper, we will assess the impact of CSS prefixes on performance and energy consumption of web apps on an Android phone. Browsing the internet on Android phones has become ubiquitous and even small changes in energy consumption could lead to big savings on a global scale. We will look at fifty of the most popular web apps and test them with and without CSS prefixes. Prefixes are vendor specific and increase the packet size and network traffic, but were traditionally used to test new features, like rounded corners on page elements. During our tests, we conclude that there is no noticeable difference in both performance and energy consumption when using CSS prefixes.

## Software stack
The key software used to run the experiment is listed below:
 - AndroidRunner
 - PerfumeJS
 - Chrome browser
 - Firefox browser
 - Wondershaper
 - Batterystats

For a quick overview of how the software interacts, please refer to the following diagram:
<p align="center">
    <img src="https://i.imgur.com/To2cfJ3.png" />
</p>

## Files
### experiment/
This folder contains all the JSON files with settings for the AndroidRunner experiments. A seperate file for both Chrome and Firefox exists, because AndroidRunner crashes when a single file is used for the settings of Chrome and Firefox. There is also a Python script that automatically creates an ADB connection over wifi and another script to aggregate the AndroidRunner result files into an easily parsable CSV file.

### resources/
Contains CSV files for the Kalman filtered results and the top 300 web apps from the Tranco list.

### scripts/
To download, prefix and strip web apps, several scripts were created. The process is semi-automated and requires manual interaction to first download web apps, then prefix and strip them, and finally to add the Javascript that calls the perfumeJS server when an app has finished loading. After the sites have been downloaded, they can be hosted on a webserver like Apache2.

### statistical_analysis/
Contains the R code used to generate plots and run statistical tests.

### ./
All the other miscellaneous files that do not belong to a folder.
