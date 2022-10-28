import logging
from .StopRunWebserver import StopRunWebserver
from .util import ConfigError, keyboardinterrupt_handler
import time
from http.server import BaseHTTPRequestHandler, HTTPServer
import multiprocessing as mp
import psutil

class PrematureStoppableRun(object):
    """ Starts a run that is stopped prematurely when:
        1. a certain regex is matched in the logcat of the given device.
        2. a HTTP POST request is received by the local webserver.  
        3. the stop() method is called on the Experiment object instance.

        If this does not happen the run continues and finishes as usual thus not stopping early/prematurely.

        When an user chooses either the logcat_regex or post_request method he/she can also use the stop() function call.

        A "run" in Android Runner basically consists of what happens between the start_profiling and stop_profiling functional calls.
        In AR this is the interaction function. So we want to run this function and stop it when a regex is matched, 
        post request is received or function call is executed.
        
        From a high level perspective it works as follows:
        We run two processes (in addition to our main process) simultaneously:
        1. A process running the interaction function (the AR "run")
        2. A processes that either:
            - runs a webserver (for the post_request option) or
            - continuosly checks the logcat for the given regex (for the logcat_regex option). 
        In addition we have a queue which is shared among these two processes (as well as the main process).
        We then block the main process, waiting for one of the two processes to write to the queue.
        The process running the interaction function will write to the queue when the interation (and thus the run) has finished.
        The process running either a webserver will write to the queue when a HTTP POST request is received or when the logcat matches the regex.
        When the stop() method is called on the Experiment object instance it will also write to the queue.
        After a process writes to the queue the given process is finished and the main process will continue as well.
        We then terminate the "other" process that is left. 
        For example: when HTTP POST request was received or logcat regex was matched the interaction process will get terminated thus stopping the run and vice versa.
    """

    STOPPING_MECHANISM_HTTP_POST_REQUEST = "HTTP POST request"
    STOPPING_MECHANISM_LOGCAT_REGEX = "matching regex"
    STOPPING_MECHANISM_FUNCTION_CALL = "stop() function call"

    def __init__(self, run_stopping_condition_config, queue, interaction_function, device, path, run, *args, **kwargs):
        """ Creates a PrematureStoppableRun instance. 

            Parameters
            ----------
            run_stopping_condition_config : dict
                A dictionary containing the run stopping condition (post_request, logcat_regex, function),
                the regex (in case of logcat_regex) and optional options (port number in case of post_request).
            queue : multiprocessing.Queue
                The queue that is shared among the main process and child processes.
            interaction_function : function
                The interaction function that represents the run.
            device : AndroidRunner.Device
                The device for the current run.
            path : str
                The path for the current run
            run : int
                The currents run count.
            *args
                Variable length argument list
            **kwargs
                Arbitrary keyword arguments.
        """
        self.run_stopping_condition_config = run_stopping_condition_config
        self.queue = queue
        self.interaction_function = interaction_function
        self.device = device
        self.path = path
        self.args = args
        self.kwargs = kwargs
        self.logger = logging.getLogger(self.__class__.__name__)

        self.condition = next(iter(self.run_stopping_condition_config))
        if self.condition not in ["function", "post_request", "logcat_regex"]:
            raise ConfigError("Given run_stopping_condition is not accepted. Accepted values are function, post_request or logcat_regex")
        
        self.regex = run_stopping_condition_config[self.condition].get("regex", None)
        if self.condition == "logcat_regex" and self.regex == None:
            raise ConfigError("A regex must be given when run_stopping_condition is set to logcat_regex.")

        self.server_port = run_stopping_condition_config[self.condition].get("port", StopRunWebserver.DEFAULT_SERVER_PORT)
        if not isinstance(self.server_port, int):
            raise ConfigError("Provided server port for run_stopping_condition value must be an integer.")

    @keyboardinterrupt_handler
    def _mp_interaction(self, queue, interaction_function, device, path, run, *args, **kwargs):
        """ Runs the provided interaction_function and when done writes to the central shared <queue>.

        Parameters
        ----------
        queue : multiprocessing.Queue
            The queue that is shared among the main process and child processes.
        interaction_function : function
            The interaction function (run) that needs to be executed and which can be prematurely stopped.
        device : AndroidRunner.Device
            The device for the current run.
        path : str 
            The path for the current run
        run : int
            The current run count.
        *args
            Variable length argument list
        **kwargs
            Arbitrary keyword arguments.
        """
        interaction_function(device, path, run, *args, **kwargs)
        queue.put("interaction")

    @keyboardinterrupt_handler
    def _mp_logcat_regex(self, queue, device, regex):
        """ Keeps checking the logcat of the <device> until an 
            entry matching the <regex> is found. When done it writes
            to the shared <queue> so main process knows it can stop other process(es).

            Parameters
            ----------
            queue : multiprocessing.Queue
                The queue that is shared among the main process and child processes.
            device : AndroidRunner.Device
                The device for the current run.
            regex : str
                The regex that should be matched.
        """
        while not device.logcat_regex(regex):
            time.sleep(1)
        queue.put(PrematureStoppableRun.STOPPING_MECHANISM_LOGCAT_REGEX)

    @keyboardinterrupt_handler
    def _mp_post_request(self, queue, server_port):
        """ Starts a local webserver on <server_port> that stops when a HTTP POST
            request is received. It then writes to the central shared <queue>.

            Parameters
            ---------
            queue : multiprocessing.Queue
                The queue that is shared among the main process and child processes.
            server_port : int
                The port on which the local webserver is started.
        """
        self.logger.info(f"Starting webserver on port {server_port}.")
        webServer = HTTPServer(("", server_port), StopRunWebserver)

        # We "serve_forever" but the server will stop itself when a HTTP POST request was received.
        webServer.serve_forever()
        queue.put(PrematureStoppableRun.STOPPING_MECHANISM_HTTP_POST_REQUEST)

    def run(self):
        """ Runs the interaction (run) process in a new process which can be prematurely stopped by
            the stop() function call, a receiving HTTP POST request or found regex. 
        """
        procs = []

        # Start either a local webserver or continuously check the devices logcat for a regex in a new process.
        # When the condition is set to "function" we don't need to start another process, only the interaction process.
        if self.condition == "post_request":
            procs.append(mp.Process(target=self._mp_post_request, args=(self.queue, self.server_port,)))
        elif self.condition == "logcat_regex":
            procs.append(mp.Process(target=self._mp_logcat_regex, args=(self.queue, self.device, self.regex,)))

        # Always run the interaction (run).
        procs.append(mp.Process(target=self._mp_interaction, args=(self.queue, self.interaction_function, self.device, self.path, self.run, *self.args,), kwargs=self.kwargs))

        for proc in procs:
            proc.start()

        # Wait till one of the created processes writes to the queue. It means that that process is finished.
        res = self.queue.get()

        if res != "interaction":
            self.logger.info(f"Run was prematurely stopped by means of a(n) {res}.")

        # Terminate all processes also the ones that are not finished (since it may have child processes we have to kill them too).
        for proc in procs:
            parent = psutil.Process(proc.pid)

            # Kill its child proccesses.
            for child in parent.children(recursive=True):
                child.terminate()

            proc.terminate()
