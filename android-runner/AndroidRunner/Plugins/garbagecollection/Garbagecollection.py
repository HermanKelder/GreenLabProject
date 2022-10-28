import os.path as op
import os
import time
import csv

from AndroidRunner.Plugins.Profiler import Profiler


class ConfigError(Exception):
    pass


class Garbagecollection(Profiler):
    def __init__(self, config, paths):
        super(Garbagecollection, self).__init__(config, paths)
        self.output_dir = ''
        self.logcat_output = ''
        self.profile = False

    def start_profiling(self, device, **kwargs):
        self.profile = True
        self.logcat_output = '{}logcat_{}_{}.txt'.format(self.output_dir, device.id, time.strftime('%Y.%m.%d_%H%M%S'))

    def stop_profiling(self, device, **kwargs):
        self.profile = False

    def collect_results(self, device, path=None):
        device.shell('logcat -f /mnt/sdcard/logcat.txt -d')

        if 'error' in device.pull('/mnt/sdcard/logcat.txt', self.logcat_output).decode():
            self.logger.critical('Failed to pull logcat log file from the device which makes it impossible to gather GC calls.')
            return

        device.shell('rm -f /mnt/sdcard/logcat.txt')

        collections_filename = 'collections_{}_{}.csv'.format(device.id, time.strftime('%Y.%m.%d_%H%M%S'))
        total_filename = 'total_{}_{}.csv'.format(device.id, time.strftime('%Y.%m.%d_%H%M%S'))
        collections_count = 0

        with open(self.logcat_output) as logcat:
            with open(op.join(self.output_dir, collections_filename), 'w+') as output:
                lines = logcat.readlines()
                for i, line in enumerate(lines):
                    if 'GC freed' in line and 'AllocSpace objects,' in line:
                        output.write(line)
                        collections_count += 1
        with open(op.join(self.output_dir, total_filename), 'a') as output:
            writer = csv.writer(output)
            writer.writerow(['garbage_collection_count'])
            writer.writerow([collections_count])
        os.remove(self.logcat_output)

    def set_output(self, output_dir):
        self.output_dir = output_dir

    def dependencies(self):
        return []

    def load(self, device):
        return

    def unload(self, device):
        return

    def aggregate_subject(self):
        with open(op.join(self.output_dir, 'all_garbage_collection_counts.csv'), 'w+') as output:
            writer = csv.writer(output)
            writer.writerow(['delayed_frames'])
            for output_file in os.listdir(self.output_dir):
                if output_file.startswith("total"):
                    writer.writerow([int(open(op.join(self.output_dir, output_file)).readlines()[1])])

    def aggregate_end(self, data_dir, output_file):
        return

    def aggregate_final(self, data_dir):
        return
