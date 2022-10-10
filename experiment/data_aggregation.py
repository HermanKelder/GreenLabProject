import os
import csv
import numpy as np

base_dir = '/home/pi/experiment/output'
experiment = '/2022.10.09_143706'
data = '/data/tank'
browsers = ['firefox']
num_trials = 1
results_folder = '/home/pi/experiment'
results_order = ["Website", "Treatment", "fcp", "fp", "Joules"]

def website_dict_to_array_results(website_dict):
    return [website_dict[results_order[i]] for i in range(len(results_order))]

def get_data():
    websites = os.listdir(base_dir + experiment + data + "/")
    results = []

    for website in websites:
        splitted = website.split('-')
        id = splitted[6]
        prefix_treatment = splitted[5]

        website_result = {"Website" : id, "Treatment" : prefix_treatment}

        for browser in browsers:
            # PERFUMEJS
            csvs_dir = base_dir + experiment + data + "/" + website + "/" + browser + "/" + "perfume_js" + "/"
            csvs = os.listdir(csvs_dir)

            fcp = -1
            fp = -1

            for csv_id in csvs:
                perfume_metric = csv_id.split('_')[0]
                perfume_value = np.genfromtxt(csvs_dir + csv_id, skip_header=1)

                website_result[perfume_metric] = perfume_value

                # print("Website:", id)
                # print("Treatment:", prefix_treatment)
                # print("Metric:", perfume_metric)
                # print("Result:", perfume_value)
                # print("")



            # BATTERYSTATS
            csvs_dir = base_dir + experiment + data + "/" + website + "/" + browser + "/" + "batterystats" + "/"
            joules = np.genfromtxt(csvs_dir + "Aggregated.csv", skip_header=1)

            website_result["Joules"] = joules

            # print("Website:", id)
            # print("Treatment:", prefix_treatment)
            # print("Joules:", joules)
            # print("")

        results += [website_result]
    return results



def write_results(data):
    with open(results_folder + experiment + "_results.csv", 'w+') as results:
        writer = csv.writer(results, delimiter="\n")
        writer.writerow('Website, Treatment, FP, FCP, Joules')

        for website_result in data:
            writer.writerow(dict_to_array_results(website_result))


data = get_data()
write_results(data)