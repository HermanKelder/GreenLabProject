from AndroidRunner.Device import Device
from AndroidRunner.Experiment import Experiment
from typing import Dict
import time
import logging

LOGGER = logging.getLogger()

# Generally, after every action, we need to wait for the display to update.
# The time to update varies.

def tap(device: Device, x: int, y: int, sleep = 1) -> None:
    device.shell(f'input tap {x} {y}')
    time.sleep(sleep)

def write_text(device: Device, text: str, sleep = 1) -> None:
    device.shell(f'input text \'{text}\'')
    time.sleep(sleep)

def swipe(device: Device, x1: int, y1: int, x2: int, y2: int, sleep = 4, duration = 1000):
    device.shell(f'input swipe {x1} {y1} {x2} {y2} {duration}')
    time.sleep(sleep)

def main(device: Device, *args, **kwargs) -> None:
    LOGGER.debug(args)
    LOGGER.debug(kwargs)

    experiment: Experiment = args[0] # can be useful if you want to differentiate actions per subject
    current_run: Dict = experiment.get_experiment()
    LOGGER.debug(current_run)
    
    for _ in range(3):
        tap(device, 543, 1188)
