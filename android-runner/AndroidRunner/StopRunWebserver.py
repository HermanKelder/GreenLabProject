from http.server import BaseHTTPRequestHandler, HTTPServer
import threading
import paths
import os.path as op
import datetime
from .util import makedirs
import logging

class StopRunWebserver(BaseHTTPRequestHandler):
    DEFAULT_SERVER_PORT = 8000

    def do_GET(self): #pragma: no cover
        """ Handles incoming HTTP GET requests by:
            - Showing a simple webpage telling that the server is running and ready for accepting requests.
        """
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(bytes("<html><head><title>Android Runner HTTP Server</title></head>", "utf-8"))
        self.wfile.write(bytes("<body>", "utf-8"))
        self.wfile.write(bytes("<p>The Android Runner web server is running successfully!<br />", "utf-8"))
        self.wfile.write(bytes("Send a POST request to this URL to stop the current run. </p>", "utf-8"))
        self.wfile.write(bytes("</body></html>", "utf-8"))

    def do_POST(self): #pragma: no cover
        """ Handles incoming HTTP POST requests by:
            1. writing the HTTP POST request payload to a file.
            2. Stopping the server so the process can write to the queue and the run is stopped.
        """ 
        self.logger = logging.getLogger(self.__class__.__name__)

        if self.headers["Content-Length"] != None and int(self.headers["Content-Length"]) > 0:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)

            dir_path = op.join(paths.OUTPUT_DIR, "http_post_request_payloads") 
            makedirs(dir_path)

            file_ = datetime.datetime.now().strftime("%Y_%m_%dT%H_%M_%S_%f")
            if self.headers["Content-type"] == "application/json":
                filename = op.join(dir_path, f"{file_}.json")
            else:
                filename = op.join(dir_path, f"{file_}.txt")

            with open(filename, 'w+') as opened_file:
                opened_file.write(post_data.decode("utf-8"))
                self.logger.info(f"Wrote HTTP POST request payload to {filename}")
        else:
            self.logger.info("Received HTP POST request did not contain a payload.")

        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

        def kill_server(server):
            server.shutdown()

        threading.Thread(target=kill_server, args=(self.server,)).start()