from AndroidRunner.Device import Device
import time


default_wait_time = 4


def tap(device: Device, x: int, y: int, sleep = 4) -> None:
    device.shell('input tap %s %s' % (x, y))
    # We need to wait for the display to update after the last click.
    # The time to update is vary. 
    time.sleep(sleep)
    
# noinspection PyUnusedLocal
def main(device: Device, *args: tuple, **kwargs: dict):
    # Do task 1
    # click ____
    tap(device, 520, 2170)

    # click ____
    tap(device, 860, 2180)
    