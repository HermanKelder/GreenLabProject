# Tips and Tricks when using run_stop_condition HTTP POST Request Functionality
Using Android Runner's `run_stop_condition` functionality with `post_request` you can stop runs prematurely when a HTTP POST request is received by a locally running webserver.

A good use case is when you want to measure the page load time as well as the energy consumption of web pages. This requires the energy consumption profiling (and thus the run) to stop when the page has fully loaded. To do this we can embed a snippet of Javascript code into the webpage that sends an HTTP POST request when the web page has fully loaded like this:

```js
function xml_http_post(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);         
    req.send(data);    
}    

function calcaulate_performance() {
    var plt = window.performance.timing.domComplete - window.performance.timing.requestStart;
    var local_server_ip = "http://192.168.2.10:8000"
    console.log("Calculated PLT: " + plt);
    xml_http_post(local_server_ip, plt, null)
}    

window.addEventListener ? window.addEventListener("load", calcaulate_performance, true) : window.attachEvent && window.attachEvent("onload", calcaulate_performance);
```

This snippet sends a HTTP POST request to the local webserver when the web page is fully loaded (i.e. the *onload* event was called) with the page load time as payload. When this HTTP POST request is received by the local webserver it will stop the run and save this payload to a file. When you are cloning the subjects/websites (i.e. hosting them yourself) in your experiment this works fine. However, when we want to do this when testing websites "in the wild" things become more difficult.

To inject Javascript into "real, in the wild, non synthetic" websites we can use a proxy like [mitmproxy](https://mitmproxy.org/) that allows us to rewrite the HTTP request's response before sending it to the client. However, because of todays focus of browsers on security this can result in problems:

1. **Mixed Content:** Most websites nowadays are all served over HTTP**S** (in contrast to HTTP). When we inject the Javascript snippet above into these websites using mitmproxy we will get a mixed content error as the Javascript sends a request using an insecure HTTP connection while the website itself is served over a safe HTTP**S** connection. Since the local webserver does not support HTTPS we have to circumvent this problem in another way. We can use mitmproxy to rewrite the request to our webserver and change the scheme from HTTP**S** to HTTP.

2. **TLS Negotiating:** Even when changing the scheme from HTTPS to HTTP using mitmproxy the browser will send a request to the HTTPS URL to negotiate TLS. Sinde the local Python webserver does not support HTTPS this results in undefined behavior. To solve this problem we change our Javascript code snippet so it sends a HTTP POST request to example.com, which supports HTTPS. This establishes a TLS connection but does not send any data. Then we rewrite the host of the HTTP request from example.com to the adddress of our local webserver so we still send the POST request to our own webserver.

3. **CORS:** Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism which is used in order to check that the server will permit the actual request. The local webserver responds to requests with a response containing the `Access-Control-Allow-Origin: *` header which solves this problem. However, its also advised to use mitmproxy to rewrite the headers of the request so it contains this header.

4. **Content-Security-Policy:** Some websites have set the content-security-policy header which allows websites for example to restricting domains from which content can be requested and thus possibly blocking the HTTP POST request to our local webserver. To circumvent this we can remove this header if present.

Our mitmproxy script taking care of these things will then look like the one below. Please note that this requires mitmproxy 7. mitmproxy 7 is still in beta and thus has to be installed from source, see for instructions [this page](https://github.com/mitmproxy/mitmproxy/blob/main/CONTRIBUTING.md).

```py
from mitmproxy import http
from bs4 import BeautifulSoup

POST_SERVER = "192.168.2.7"
POST_SERVER_PORT = 8000
POST_SERVER_URL = f"{POST_SERVER}:{POST_SERVER_PORT}"

def request(flow):
    """
    Redirect HTTPS requests to example.com/ourserver 
    to our local webserver webserver 
    """
    if flow.request.pretty_host == "example.com" and flow.request.path=="/ourserver":
        flow.request.host = POST_SERVER
        flow.request.port = POST_SERVER_PORT
        flow.request.scheme = "http"

def response(flow):
    js_snippet = 'function xml_http_post(url, data, callback) {         var req = new XMLHttpRequest();        req.open("POST", url, true) ;         req.send(data);    }    function calcaulate_performance() {        var plt = window.performance.timing.domComplete - window.performance.timing.requestStart;        console.log("Calculated PLT: " + plt);        xml_http_post("https://example.com/ourserver",  plt , null)    }    window.addEventListener ? window.addEventListener("load", calcaulate_performance, true) : window.attachEvent && window.attachEvent("onload", calcaulate_performance);'

    # Add Javascript snippet to the body
    html = flow.response.get_text()
    soup = BeautifulSoup(html, "lxml")
    h1 = soup.new_tag("script")
    h1.string = js_snippet 
    soup.body.insert(0, h1)
    flow.response.set_text(str(soup))

    # Remove content-security-policy header if present.
    if "content-security-policy" in flow.response.headers:
        del flow.response.headers['content-security-policy']

    # Add header for CORS to our local webserver's response.
    if flow.request.pretty_host == POST_SERVER and flow.request.port == POST_SERVER_PORT:
        flow.response.headers["Access-Control-Allow-Origin"] = "*"

```