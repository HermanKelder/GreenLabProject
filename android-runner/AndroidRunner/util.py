import errno
import psutil
import json
import time
import os
import re
from collections import OrderedDict
from slugify import slugify
import csv


class ConfigError(Exception):
    pass

class FileNotFoundError(Exception):
    def __init__(self, filename):
        Exception.__init__(self, '[Errno %s] %s: \'%s\'' % (errno.ENOENT, os.strerror(errno.ENOENT), filename))


class FileFormatError(Exception):
    pass


def write_to_file(filename, rows):
    with open(filename, 'w', encoding='utf-8') as f:
        writer = csv.DictWriter(f, list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)

def load_json(path):
    """Load a JSON file from path, and returns an ordered dictionary or throws exceptions on formatting errors"""
    try:
        with open(path, 'r') as f:
            try:
                return json.loads(f.read(), object_pairs_hook=OrderedDict)
            except ValueError:
                raise FileFormatError(path)
    except IOError as e:
        if e.errno == errno.ENOENT:
            raise FileNotFoundError(path)
        else:
            raise e

def list_subdir(a_dir):
    """List immediate subdirectories of a_dir"""
    # https://stackoverflow.com/a/800201
    return [name for name in os.listdir(a_dir)
            if os.path.isdir(os.path.join(a_dir, name))]

def makedirs(path):
    """Create a directory on path if it does not exist"""
    # https://stackoverflow.com/a/5032238
    try:
        os.makedirs(path)
    except OSError as e:
        if e.errno != errno.EEXIST:
            raise

def wait_until(function, timeout, period=0.25, *args):
    """ Block/suspend/sleep for a maximum of <timeout> seconds until function <function> returns True. Execute <function> every
    <period> seconds. If <function> still returns False after <timeout> seconds throw a TimeourError.

    Parameters
    ----------
    function : callable
        A Python function or method
    timeout : float
        Time in seconds until TimeoutError is thrown.
    period : float
        Time in seconds between each <function> call.
    args : any
        Arguments that are passed to <function>.

    Raises
    -------
    TimeoutError
        If <function> still returns False after <timeout> seconds.

    Returns
    -------
    None
        Nothing is returned.
    """
    must_end = time.time() + timeout
    while time.time() < must_end:
        if function(*args):
            return
        time.sleep(period)
    raise TimeoutError

# noinspection PyTypeChecker
def slugify_dir(value):
    """
    Normalizes string, converts to lowercase, removes non-alpha characters,
    and converts spaces to hyphens.  Regex_pattern prevents slugify from removing
    an underscore and replacing it with a hyphen.
    """
    regex_pattern = r'[^\w]'
    slug = slugify(value, regex_pattern=regex_pattern)
    return slug

def keyboardinterrupt_handler(func):
    """ Decorator that ensures that a KeyBoardInterrupt is handled
        cleanly by terminating the associated process.

        Is necessary as a KeyBoardInterrupt is send to a process and all of its child processes.
        Each process therefore needs its own handler.

        Can be used by putting @keyboardinterrupt_handler above a function.
    """
    def inner_function(*args, **kwargs):
        try:
            func(*args, **kwargs)
        except KeyboardInterrupt as e:
            this_process = psutil.Process()
            this_process.terminate()
    return inner_function