import logging
import os.path as op
import os, glob
import zipfile
from time import sleep

from .pyand import ADB
from AndroidRunner.util import ConfigError

logger = logging.getLogger(__name__)


class AdbError(Exception):
    """Raised when there's an error with ADB"""
    pass


class ConnectionError(Exception):
    """Raised when there's an connection error"""
    pass


adb = None

settings_options = {"location_high_accuracy": ("settings put secure location_providers_allowed -gps,network","settings put secure location_providers_allowed +gps,network"),
                    "location_gps_only": ("settings put secure location_providers_allowed -gps","settings put secure location_providers_allowed +gps")
                    }

def configure_settings(device_id, setting, enable):
    cmd = settings_options[setting][enable]
    return shell(device_id, cmd)

# noinspection PyProtectedMember
def setup(path='adb'):
    global adb
    adb = ADB(adb_path=path)
    # Accessing class private variables to avoid another print of the same error message
    # https://stackoverflow.com/a/1301369
    if adb._ADB__error:
        raise AdbError('adb path is incorrect')


def connect(device_id):
    device_list = adb.get_devices()
    if not device_list:
        raise ConnectionError('No devices are connected')
    logger.debug('Device list:\n%s' % device_list)
    if device_id not in list(device_list.values()):
        raise ConnectionError('%s: Device not recognized' % device_id)


def shell_su(device_id, cmd):
    adb.set_target_by_name(device_id)
    result = adb.shell_command("su -c \'%s\'" % cmd)
    result = result.decode('utf-8') if (isinstance(result, bytes) == True) else result
    logger.debug('%s: "su -c \'%s\'" returned: \n%s' % (device_id, cmd, result))
    if 'error' in result:
        raise AdbError(result)
    return result.rstrip()


def shell(device_id, cmd):
    adb.set_target_by_name(device_id)
    result = adb.shell_command(cmd)
    result = result.decode('utf-8') if (isinstance(result, bytes) == True) else result
    logger.debug('%s: "%s" returned: \n%s' % (device_id, cmd, result))
    if 'error' in result:
        raise AdbError(result)
    return result.rstrip()


def list_apps(device_id):
    return shell(device_id, 'pm list packages').replace('package:', '').split()


def install(device_id, apk, replace=True, all_permissions=True):
    filename = op.basename(apk)
    logger.debug('%s: Installing "%s"' % (device_id, filename))
    adb.set_target_by_name(device_id)

    # get extension filename
    extension = op.splitext(apk)[-1].lower()

    if extension == '.xapk':
        cmd = ['install-multiple']
        android_runner_dir = os.getcwd()
        # get path of directory apks will be unzipped into.
        path_apks_to_be_installed = op.splitext(apk)[0].lower()
        with zipfile.ZipFile(apk, 'r') as zip_ref:
            if not op.exists(path_apks_to_be_installed):
                os.makedirs(path_apks_to_be_installed)
            zip_ref.extractall(path_apks_to_be_installed)

        os.chdir(path_apks_to_be_installed)

        current_working_directory = os.getcwd()

        apk_files = glob.glob('*.apk')

        if not apk_files:
            raise ConfigError('No apks found in xapk')

        apk_files_paths = [op.join(current_working_directory, apk_file) for apk_file in apk_files]

        # arguments of install-multiple
        apk = ' '.join(apk_files_paths)
        logger.info('installing APKs %s' % apk)
        os.chdir(android_runner_dir) # go back to android runner dir
    else:
        cmd = ['install']
        
    if replace:
        cmd += ['-r']
    if all_permissions:
        cmd += ['-g']
    cmd += ['-t', apk]
    adb.run_cmd(cmd)
    # WARNING: Accessing class private variables
    output = adb._ADB__output
    logger.debug('install returned: %s' % output)
    return output


def uninstall(device_id, name, keep_data=False):
    logger.debug('%s: Uninstalling "%s"' % (device_id, name))
    adb.set_target_by_name(device_id)
    # Flips the keep_data flag as it is incorrectly implemented in the pyand library
    keep_data = not keep_data
    result = adb.uninstall(package=name, keepdata=keep_data)
    success_or_exception(result,
                         '%s: "%s" uninstalled' % (device_id, name),
                         '%s: Failed to uninstall "%s"' % (device_id, name)
                         )


def clear_app_data(device_id, name):
    adb.set_target_by_name(device_id)
    success_or_exception(adb.shell_command('pm clear %s' % name),
                         '%s: Data of "%s" cleared' % (device_id, name),
                         '%s: Failed to clear data for "%s"' % (device_id, name)
                         )


def success_or_exception(result, success_msg, fail_msg):
    result = result.decode('utf-8') if (isinstance(result, bytes) == True) else result
    if 'Success' in result:
        logger.info(success_msg)
    else:
        logger.info(fail_msg + '\nMessage returned:\n%s' % result)
        raise AdbError(result)


# Same with push_local_file(), but with the quotes removed
# adb doesn't want quotes for some reason
# noinspection PyProtectedMember
def push(device_id, local, remote):
    adb.set_target_by_name(device_id)
    adb.run_cmd('push %s %s' % (local, remote))
    # WARNING: Accessing class private variables
    return adb._ADB__output


# Same with get_remote_file(), but with the quotes removed
# adb doesn't want quotes for some reason
# noinspection PyProtectedMember
def pull(device_id, remote, local):
    adb.set_target_by_name(device_id)
    adb.run_cmd('pull %s %s' % (remote, local))
    # WARNING: Accessing class private variables
    if adb._ADB__error and "bytes in" in adb._ADB__error:
        adb._ADB__output = adb._ADB__error
        adb._ADB__error = None
    return adb._ADB__output

def logcat(device_id, regex=None):
    """Returns the logcat log for the given device.

    When regex is provided, only return log entries that match the regex.

    Grep is used to handle regular expressions. While the logcat command itself supports regular expressions using
    the -e flag it is not available on all devices.
    Using grep circumvents this problem provided that the host OS has grep installed.

    Parameters
    ----------
    device_id : string
        ID of the device we want to see the logcat log of.
    regex : string, optional, default=None
        The regular expression

    Returns
    -------
    string
        The full logcat log or the logcat entries that match the regular expression.
    """
    # -d prints to screen and exits
    params = 'logcat -d'
    if regex is not None:
        params += f' | grep "{regex}"'
    res = shell(device_id, params)
    return res

def reset(cmd):
    if cmd:
        logger.info('Shutting down adb...')
        sleep(1)
        adb.kill_server()
        sleep(2)
        logger.info('Restarting adb...')
        adb.get_devices()
        sleep(10)
