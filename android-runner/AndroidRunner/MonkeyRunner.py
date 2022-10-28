import subprocess

from AndroidRunner.Script import Script

class MonkeyRunnerError(Exception):
    pass

class MonkeyRunner(Script):
    """
    Subclass of `Script` for running MonkeyRunner scripts directly.

    As opposed to `MonkeyReplay`, it runs the scripts directly using MonkeyRunner.
    Thanks to that it's not necessary to go through a layer of indirection in the
    form of JSON files and a custom runner. This results in higher flexibility and
    greater control.

    Usage:
    1. Create a script runnable by MonkeyRunner.
    2. Add it to the config file with the type "monkeyrunner".

    Important!
    The script has to be directly runnable by MonkeyRunner. It means that:
    - it has to create an instance of `MonkeyDevice` explicitly in the script,
    - all operations are supposed to be invoked on this instance,
    - there has to be module-level code running the operations,
    - it has to follow any other restrictions specified in the docs.

    Docs and examples: https://developer.android.com/studio/test/monkeyrunner/
    """

    def __init__(self, path, timeout=0, logcat_regex=None, monkeyrunner_path='monkeyrunner', monkey_playback_path='monkey_playback.py'):
        super(MonkeyRunner, self).__init__(path, timeout, logcat_regex)
        self.monkeyrunner_path = monkeyrunner_path
        self.monkey_playback_path = monkey_playback_path

    def execute_script(self, device, *args, **kwargs):
        """
        Run the MonkeyRunner script.

        Returns the return value returned by MonkeyRunner.
        """
        super(MonkeyRunner, self).execute_script(device, *args, **kwargs)
        res = subprocess.run([self.monkeyrunner_path, self.monkey_playback_path, self.path], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        if (res.returncode != 0                                     or \
            b'java.net.SocketException: Broken pipe' in res.stdout  or \
            b'unable to parse options'               in res.stdout  or \
            b'unknown command: '                     in res.stdout     \
        ):
            raise MonkeyRunnerError(res.stdout.decode('ascii'))
        return res.returncode
