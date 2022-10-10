import os
import numpy as np

base_dir = '/home/pi/experiment/output'
experiment = '/2022.10.09_143706'
data = '/data/tank'
browsers = ['firefox']
num_trials = 1

def get_data():
    websites = os.listdir(base_dir + experiment + data + "/")

    for website in websites:
        splitted = website.split('-')
        id = splitted[6]
        prefix_treatment = splitted[5]

        for browser in browsers:
            # PERFUMEJS
            csvs_dir = base_dir + experiment + data + "/" + website + "/" + browser + "/" + "perfume_js" + "/"
            csvs = os.listdir(csvs_dir)

            for csv_id in csvs:
                perfume_metric = csv_id.split('_')[0]
                perfume_value = np.genfromtxt(csvs_dir + csv_id, skip_header=1)

                # print("Website:", id)
                # print("Treatment:", prefix_treatment)
                # print("Metric:", perfume_metric)
                # print("Result:", perfume_value)
                # print("")


            # BATTERYSTATS
            csvs_dir = base_dir + experiment + data + "/" + website + "/" + browser + "/" + "batterystats" + "/"
            joules = np.genfromtxt(csvs_dir + "Aggregated.csv", skip_header=1)

            # print("Website:", id)
            # print("Treatment:", prefix_treatment)
            # print("Joules:", joules)
            # print("")


get_data()