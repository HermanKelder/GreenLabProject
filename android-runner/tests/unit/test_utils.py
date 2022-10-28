import os
import os.path as op
import subprocess
import pytest
from mock import Mock, patch
from AndroidRunner.USBHandler import USBHandler, USBHandlerException
import AndroidRunner.Tests as Tests
import AndroidRunner.util as util
import paths
import csv


class TestUtilClass(object):
    @pytest.fixture()
    def tmp_file(self, tmpdir):
        tmp_file = tmpdir.join('tmp.txt')
        tmp_file.write("test content")
        return str(tmp_file)
    @pytest.fixture()
    def fixture_dir(self):
        return op.join(op.dirname(op.abspath(__file__)), 'fixtures')

    def test_load_json_succes(self, tmp_file):
        fixtures = op.join(op.dirname(op.realpath(__file__)), "fixtures")
        config = util.load_json(op.join(fixtures, 'test_config.json'))
        assert config['type'] == 'web'
        assert config['devices'] == ['nexus6p']
        assert config['randomization'] == False
        assert config['repetitions'] == 3

    def test_load_json_file_format_error(self, tmp_file):
        fixtures = op.join(op.dirname(op.realpath(__file__)), "fixtures")
        with pytest.raises(util.FileFormatError) as except_result:
            util.load_json(op.join(fixtures, 'test_progress.xml'))
        assert op.join(fixtures, 'test_progress.xml') in str(except_result.value)

    def test_load_json_file_file_not_found(self, tmp_file):
        fixtures = op.join(op.dirname(op.realpath(__file__)), "fixtures")

        with pytest.raises(util.FileNotFoundError) as except_result:
            util.load_json(op.join(fixtures, 'fake_file.json'))
        assert "FileNotFoundError" in str(except_result.typename)

    def test_load_json_file_permission_denied(self, tmp_file):
        os.chmod(tmp_file, 0o222)
        with pytest.raises(IOError) as except_result:
            util.load_json(tmp_file)
        assert "Permission denied" in str(except_result.value)

    @patch("time.sleep")
    def test_wait_until_call_succeeded(self, time_sleep_mock):
        func_ = Mock()
        func_.side_effect = [False, False, True]

        util.wait_until(func_, 5)

        assert func_.call_count == 3

    @patch("time.sleep")
    def test_wait_until_call_timeout_error(self, time_sleep_mock):
        func_ = Mock()
        func_.return_value = False

        with pytest.raises(TimeoutError):
            util.wait_until(func_, 5)

    @patch("psutil.Process")
    def test_keyboardinterrupt_handler(self, psutil_mock):
        def test_function():
            raise KeyboardInterrupt

        new_function = util.keyboardinterrupt_handler(test_function)
        new_function()

        psutil_mock.terminate.called_once()

    def test_makedirs_succes(self, tmpdir):
        dir_path = op.join(str(tmpdir), 'test1')
        assert op.isdir(dir_path) is False
        util.makedirs(dir_path)
        assert op.isdir(dir_path) is True

    def test_makedirs_fail_already_exist(self, tmpdir):
        dir_path = op.join(str(tmpdir), 'test1')
        assert op.isdir(dir_path) is False
        util.makedirs(dir_path)
        util.makedirs(dir_path)
        assert op.isdir(dir_path) is True
        files_in_path = [f for f in os.listdir(str(tmpdir)) if os.path.isdir(os.path.join(str(tmpdir), f))]

        assert len(files_in_path) == 1

    def test_makedirs_fail(self, tmpdir):
        os.chmod(str(tmpdir), 0o444)
        dir_path = op.join(str(tmpdir), 'test2')
        assert op.isdir(dir_path) is False
        with pytest.raises(OSError) as except_result:
            util.makedirs(dir_path)
        assert "Permission denied" in str(except_result.value)
        assert op.isdir(dir_path) is False

    def test_slugify(self):
        string1 = "asdfghjkl.test"
        assert util.slugify_dir(string1) == string1.replace(".", "-")

        string2 = "ASDFGHJKL"
        assert util.slugify_dir(string2) == string2.lower()

        string3 = "@#$%^&*"
        assert util.slugify_dir(string3) == ""

        string4 = "a b c d e f"
        assert util.slugify_dir(string4) == string4.replace(" ", "-")

    def test_write_to_file(self, tmpdir):
        tmp_file = op.join(str(tmpdir), 'test_output.csv')
        test_rows = [{'key1': 'value1', 'key2': 'value2'}, {'key1': 'value3', 'key2': 'value4'}]
        util.write_to_file(tmp_file, test_rows)

        assert op.isfile(tmp_file)
        assert self.csv_reader_to_table(tmp_file) == list(
            [['key1', 'key2'], ['value1', 'value2'], ['value3', 'value4']])

    def test_list_subdir(self, fixture_dir):
        test_dir = op.join(fixture_dir, 'test_dir_struct')

        result_subdirs = util.list_subdir(test_dir)

        assert len(result_subdirs) == 2
        assert 'data_native' in result_subdirs
        assert 'data_web' in result_subdirs

    @staticmethod
    def csv_reader_to_table(filename):
        result = []
        with open(filename, mode='r') as csv_file:
            csv_reader = csv.reader(csv_file)
            for row in csv_reader:
                result.append(row)
        return result

class TestPathsClass(object):
    def test_paths_dict(self):
        string_config = 'test/dir/1'
        string_output = 'test/dir/2'
        string_base = 'test/dir/3'
        string_original = 'test/dir/4'
        paths.CONFIG_DIR = string_config
        paths.OUTPUT_DIR = string_output
        paths.BASE_OUTPUT_DIR = string_base
        paths.ORIGINAL_CONFIG_DIR = string_original

        paths_dict = paths.paths_dict()
        assert paths_dict['ROOT_DIR'] == op.dirname(op.abspath(paths.__file__))
        assert paths_dict['CONFIG_DIR'] == string_config
        assert paths_dict['OUTPUT_DIR'] == string_output
        assert paths_dict['BASE_OUTPUT_DIR'] == string_base
        assert paths_dict['ORIGINAL_CONFIG_DIR'] == string_original

        
        

class TestTestsClass(object):
    def test_is_integer_not_int(self):
        with pytest.raises(util.ConfigError) as except_result:
            Tests.is_integer("error")
        assert 'error is not an integer' in str(except_result.value)

    def test_is_integer_too_small(self):
        with pytest.raises(util.ConfigError) as except_result:
            Tests.is_integer(-1)
        assert '-1 should be equal or larger than 0' in str(except_result.value)

    def test_is_integer_succes(self):
        assert Tests.is_integer(10) == 10

    def test_cmd_not_valid(self):
        with pytest.raises(util.ConfigError) as except_result:
            Tests.is_valid_option("r", ["restart", "abc"])
        assert "'r' not recognized.  Use one of: ['restart', 'abc']" in str(except_result.value)

    def test_cmd_truthy(self):
        with pytest.raises(util.ConfigError) as except_result:
            Tests.is_valid_option("True", [False, True])
        assert "'True' not recognized.  Use one of: [False, True]" in str(except_result.value)

    def test_more_than_one_cmd(self):
        with pytest.raises(util.ConfigError) as except_result:
            Tests.is_valid_option("restart abc", ["restart", "abc"])
        assert "'restart abc' not recognized.  Use one of: ['restart', 'abc']" in str(except_result.value)

    def test_cmd_is_valid(self):
        test_command = "foo"
        assert Tests.is_valid_option(test_command, ["bar","foo"]) == test_command

    def test_is_string_fail(self):
        with pytest.raises(util.ConfigError) as except_result:
            Tests.is_string(list())
        assert "String expected, got <class 'list'>" in str(except_result.value)

    def test_is_string_succes(self):
        test_string = 'This is a string'
        assert Tests.is_string(test_string) == test_string

    @patch('logging.Logger.error')
    def test_check_dependencies_fail(self, mock_log):
        mock_device = Mock()
        mock_device.id = 'Fake_device'
        mock_device.is_installed.return_value = {'NotInstalled': False, 'installed': True}
        mocked_devices = [mock_device, mock_device]

        with pytest.raises(util.ConfigError) as except_result:
            Tests.check_dependencies(mocked_devices, "")
        assert "Required packages ['NotInstalled'] are not installed on device Fake_device" in str(except_result.value)
        mock_log.assert_called_once_with('Fake_device: Required package NotInstalled is not installed')

    @patch('logging.Logger.error')
    def test_check_dependencies_succes(self, mock_log):
        mock_dependencies = Mock()
        mock_device = Mock()
        mock_device.id = 'Fake_device'
        mock_device.is_installed.return_value = {'Installed2': True, 'installed': True}
        mocked_devices = [mock_device, mock_device]
        Tests.check_dependencies(mocked_devices, mock_dependencies)
        assert mock_device.is_installed.call_count == 2
        assert mock_log.call_count == 0

class TestUSBHandler(object):
    @pytest.fixture()
    def usb_handler(self):
        usb_handler_config = {"enable_command" : "enable", "disable_command" : "disable"}
        usb_handler = USBHandler(usb_handler_config)
        return usb_handler

    def test_init_error_no_enable_command(self):
        usb_handler_config = {"disable_command" : "command"}

        with pytest.raises(util.ConfigError) as exception_result:
            usb_handler = USBHandler(usb_handler_config)
        assert "Please provide an enable_command for the usb_handler." in str(exception_result.value)

    def test_init_error_no_disable_command(self):
        usb_handler_config = {"enable_command" : "command"}

        with pytest.raises(util.ConfigError) as exception_result:
            usb_handler = USBHandler(usb_handler_config)
        assert "Please provide an disable_command for the usb_handler." in str(exception_result.value)

    def test_init_no_config(self):
        usb_handler_config = None
        usb_handler = USBHandler(usb_handler_config)

        assert usb_handler.usb_enable_command == None
        assert usb_handler.usb_disable_command == None 
        assert usb_handler._usb_enabled == None

    def test_init_with_valid_config(self):
        usb_handler_config = {"enable_command" : "enable", "disable_command" : "disable"}
        usb_handler = USBHandler(usb_handler_config)

        assert usb_handler.usb_enable_command == "enable"
        assert usb_handler.usb_disable_command == "disable" 
        assert usb_handler._usb_enabled == True

    @patch("AndroidRunner.USBHandler.USBHandler._run_command")
    def test_enable_usb_do_enable_run_command(self, run_command_mock, usb_handler):
        usb_handler._usb_enabled = False
        usb_handler.enable_usb()

        run_command_mock.assert_called_once_with("enable")
        assert run_command_mock.call_count == 1

    @patch("AndroidRunner.USBHandler.USBHandler._run_command")
    def test_enable_usb_do_not_run_command(self, run_command_mock, usb_handler):
        usb_handler._usb_enabled = True
        usb_handler.enable_usb()

        assert run_command_mock.call_count == 0

    @patch("AndroidRunner.USBHandler.USBHandler._run_command")
    def test_disable_do_disable_run_command(self, run_command_mock, usb_handler):
        usb_handler._usb_enabled = True
        usb_handler.disable_usb()

        run_command_mock.assert_called_once_with("disable")
        assert run_command_mock.call_count == 1

    @patch("AndroidRunner.USBHandler.USBHandler._run_command")
    def test_disable_usb_do_not_disable_run_command(self, run_command_mock, usb_handler):
        usb_handler._usb_enabled = False
        usb_handler.disable_usb()

        assert run_command_mock.call_count == 0

    @patch("subprocess.Popen")
    def test_run_command_no_command(self, popen_mock):
        usb_handler_config = None
        usb_handler = USBHandler(usb_handler_config)

        usb_handler._run_command(None)
        assert popen_mock.call_count == 0

    @patch("subprocess.Popen")
    def test_run_command_throw_timeout_expired_exception(self, popen_mock, usb_handler):
        def throw_timeout_expired_exception(timeout):
            raise subprocess.TimeoutExpired("cmd", 5)

        proc_object = Mock()
        proc_object.communicate = throw_timeout_expired_exception
        popen_mock.return_value = proc_object

        with pytest.raises(USBHandlerException) as exception_result:
            usb_handler._run_command("enable")
        assert "TimeOutError while executing USB command" in str(exception_result.value)

        popen_mock.assert_called_once_with(["enable"], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    @patch("subprocess.Popen")
    def test_run_command_throw_timeout_throw_stderr(self, popen_mock, usb_handler):
        proc_object = Mock()
        proc_object.communicate.return_value = (None, b"error")
        popen_mock.return_value = proc_object

        with pytest.raises(USBHandlerException) as exception_result:
            usb_handler._run_command("enable")
        assert "Could not execute USB command: error" in str(exception_result.value)

        popen_mock.assert_called_once_with(["enable"], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)