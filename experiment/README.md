# Experiment

This folder contains all the JSON files with settings for the AndroidRunner experiments. A seperate file for both Chrome and Firefox exists, because AndroidRunner crashes when a single file is used for the settings of Chrome and Firefox. There is also a Python script (startup.py) that automatically creates an ADB connection over wifi and another script (data_aggregation.py) to aggregate the AndroidRunner result files into an easily parsable CSV file.

## Network speed
The network speed on the raspberry pi should be throttled to represent the common 4G wireless connection (15Mbit).

```
wondershaper -a eth0 -d 18750 -u 18750
```


## PerfumeJS
In order to retrieve the performance metrics PerfumeJS is used. The following JavaScript must be inserted in the ```<head>``` tag of each web app.

```
<script src="/node_modules/perfume.js/dist/perfume.umd.min.js"></script>
<script>
    perfumeResults = [];
    loadResults = [];
    function xml_http_post(url, data, callback) { var req = new XMLHttpRequest(); req.open("POST", url, true); req.send(data); }
    const perfume = new Perfume({ analyticsTracker: (options) => { const { metricName, data, eventProperties, navigatorInformation } = options; perfumeResults.push(options); } });
    function load_log() {
        var load_time = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        loadResults.push({'load' : load_time});
        objectToSend = "{'perfumeResults':"+JSON.stringify(perfumeResults)+JSON.stringify(loadResults)+"}";
        xml_http_post("http://192.168.40.1:8080/",objectToSend,null);
        xml_http_post("http://192.168.40.1:8000",objectToSend,null); };
        window.addEventListener? window.addEventListener("load",load_log, true) : window.attachEvent && window.attachEvent("onload", load_log);
</script>
```