# PerfumeJs Plugin

The plugin is used to collect several field data using the [perfume.js](https://zizzamia.github.io/perfume/) library, including, Navigation Timing, Network Information, Storage Estimate, First Paint (FP) and First Contentful Paint (FCP).

## Devices Preparation
* Both the Android device and the machine should have internet connection.
* The browser version used within the Android device should support the attribute ['supportedEnteryType'](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver) to collect certain data (e.g. FP and FCP).

## Installation
* [BeautifulSoup](https://pypi.org/project/beautifulsoup4/)

```bash
pip install beautifulsoup4
```

## Perfume.js Library Setup
To use this plugin some steps must be done.

* Install Perfume.js Library using the following command to get the latest version of the library

```bash
npm install perfume.js --save
```

* The `node_modules` folder containing the perfume.js library should be placed in the same directory where the web applications are served.

* The scripts below should be injected to the index.html of every web application, where IP in the `http://IP:8080/` should be replaced with the network IP address that the machine is connected to. You can run the python code `android-runner/AndroidRunner/Plugins/perfumejs/AddJS.py` using the command below.

```
<script src="/node_modules/perfume.js/dist/perfume.umd.min.js"></script>
<script>perfumeResults = []; 
function xml_http_post(url, data, callback) {var req = new XMLHttpRequest(); req.open("POST", url, true); 
req.send(data);} 
const perfume = new Perfume({  analyticsTracker: (options) => {    const { metricName, data, eventProperties, navigatorInformation } = options; 
perfumeResults.push(options); } }); 
function load_log() { 
setTimeout(function(){ objectToSend = "{'perfumeResults':"+JSON.stringify(perfumeResults)+"}"; 
xml_http_post("http://IP:8080/",objectToSend,null); },5000); };
window.addEventListener ?window.addEventListener("load",load_log, true) : window.attachEvent && window.attachEvent("onload", load_log);</script>
```

```bash
python3 AddJS.py path_to_directory_containing_all_WebApps http://IP:8080/
```

## Configuration
Below shows an example of the plugin setup in the configuration file(**Note**: Also available for fid, lcp, cls and tbt):

```
  "profilers":{
    "perfume_js": {
      "metrics":["fp","fcp","storageEstimate","navigationTiming","networkInformation"]
    }
```

**metrics** *Array* metrics/data that should be collected throughout the duration of the experiment

## Notes

* If the network connection(internet connection) is changed to a different network, then the IP address injected within the Web applications should also be changed.
* If FP and FCP data are important for the experiment to be collected, make sure that the broswer selected support `supportedEnteryType` as mentioned earlier.
* The plugin won't be able to collect the desired data if the web application selected redirects to another domain when the index.html is loaded.
