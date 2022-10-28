import subprocess

import paths
from .Script import Script


class MonkeyReplayError(Exception):
    pass


# https://github.com/LoganD/MonkeyRunner
class MonkeyReplay(Script):
    def __init__(self, path, timeout=0, logcat_regex=None, monkeyrunner_path='monkeyrunner'):
        super(MonkeyReplay, self).__init__(path, timeout, logcat_regex)
        self.monkeyrunner = monkeyrunner_path
        self.logger.debug('Replay path: %s' % self.path)
        # TODO: Check if monkeyrunner jyson and the player files exist

    def execute_script(self, device, *args, **kwargs):
        """Calls the monkeyrunner process with the player"""
        super(MonkeyReplay, self).execute_script(device, *args, **kwargs)
        # https://docs.python.org/2/library/subprocess.html
        args = {
            'monkey': self.monkeyrunner,
            'plugins': ['jyson-1.0.2.jar'],
            'program': 'MonkeyPlayer/replayLogic.py',
            'args': self.path,
        }
        args['plugins'] = ' '.join(['-plugin %s' % p for p in args['plugins']])
        args = '{monkey} {plugins} {program} {args}'.format(**args).split(' ')
        cmdp = subprocess.Popen(args, cwd=paths.ROOT_DIR, shell=False, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        output, error = cmdp.communicate()
        output = output.decode('ascii')
        error  = error.decode('ascii')
        self.logger.debug(f"monkeyrunner stdout: {output}")
        self.logger.debug(f"monkeyrunner stderr: {error}")
        return_code = cmdp.wait()
        if return_code != 0:
            raise MonkeyReplayError(output)
        return return_code
