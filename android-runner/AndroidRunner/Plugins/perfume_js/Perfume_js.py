import os.path as op
import os
import time
import csv
import threading
import shutil
from AndroidRunner.Plugins.perfume_js.server import start_server, stop_server

from AndroidRunner.Plugins.Profiler import Profiler

daemon = ""

class Perfume_js(Profiler):
    def __init__(self, config, paths):
        super(Perfume_js, self).__init__(config, paths)
        self.output_dir = ''
        self.logcat_output = ''
        self.profile = False
        self.metrics = config['metrics']
        #self.httpd= ""

    def start_profiling(self, device, **kwargs):
        self.profile = True
        self.logcat_output = '{}logcat_{}_{}.txt'.format(self.output_dir, device.id, time.strftime('%Y.%m.%d_%H%M%S'))
        #global daemon

        os.mkdir('output')#Adds an empty 'output' folder so if the internet connection 

        time.sleep(1)

    def stop_profiling(self, device, **kwargs):
        self.profile = False
        #global daemon


    def collect_results(self, device, path=None):
        if(os.path.isdir("output")):#check if the folder is created, sometimes if the internet connection is done server.py won't create the folder
            perfumeOutputFiles= os.listdir("output")

            for onefile in perfumeOutputFiles:
                if any(metr in onefile for metr in self.metrics):
                    newFilesDestination= shutil.move("output/"+onefile,self.output_dir)
            shutil.rmtree("output/")

    def set_output(self, output_dir):
        self.output_dir = output_dir

    def dependencies(self):
        return []

    def load(self, device):
        if(os.path.isdir("output")): #deletes folder called 'output' in the root directory (NOTE: The root directory here is the directory where the experiment in executed)
            shutil.rmtree("output/")

        daemon = threading.Thread(name='daemon_server', target=start_server)
        daemon.setDaemon(True) # Set as a daemon so it will be killed once the main thread is dead.
        daemon.start()
        return

    def unload(self, device):
        stop_server()
        return

    def aggregate_subject(self):
        return

    def aggregate_end(self, data_dir, output_file):
        return

    def aggregate_final(self, data_dir):
        return

