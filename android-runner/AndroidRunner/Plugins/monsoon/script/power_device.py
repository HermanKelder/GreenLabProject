from physalia import power_meters
import sys
import os
import csv

file_path = os.path.abspath(os.path.dirname(__file__))
file_name = "monsoon_config.csv"
joined = os.path.join(file_path, file_name)


def main():
  vout = sys.argv[1]
  serial = sys.argv[2]
  with open(joined, 'w+') as file:
    writer = csv.writer(file)
    writer.writerow([vout])
    writer.writerow([serial])
  power_meter = power_meters.MonsoonHVPMPowerMeter(float(vout), int(serial))

if __name__ == '__main__':
    main()
else:
    with open(joined, 'r') as file:
        reader = csv.reader(file)
        rows = [r for r in reader]
        vout = rows[0][0]
        serial = rows[1][0]
    power_meter = power_meters.MonsoonHVPMPowerMeter(float(vout), int(serial))
