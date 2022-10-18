import os
import csv
import numpy as np

base_dir = '/home/pi/experiment/output'
experiment = '/2022.10.14_223104'
data = '/data/tank'
browsers = ['firefox']
num_trials = 10
results_folder = '/home/pi/experiment'
results_order = ["Website", "Treatment", "fp", "fcp", "loadTime", "Joules", "Trial"]

def website_dict_to_array_results(website_dict):
    return [website_dict[results_order[i]] for i in range(len(results_order))]

def get_data():
    websites = os.listdir(base_dir + experiment + data + "/")
    results = []
    websites_done = []

    for website in sorted(websites):
        splitted = website.split('-')
        id = splitted[6]
        prefix_treatment = splitted[5]

        for browser in browsers:
            # PERFUMEJS
            perfume_csvs_dir = base_dir + experiment + data + "/" + website + "/" + browser + "/" + "perfume_js" + "/"
            perfume_csvs = os.listdir(perfume_csvs_dir)
            perfume_csvs_fp = sorted([csv for csv in perfume_csvs if csv.startswith("fp")])
            perfume_csvs_fcp = sorted([csv for csv in perfume_csvs if csv.startswith("fcp")])
            perfume_csvs_lt = sorted([csv for csv in perfume_csvs if csv.startswith("loadTime")])

            # BATTERYSTATS
            batterystats_csvs_dir = base_dir + experiment + data + "/" + website + "/" + browser + "/" + "batterystats" + "/"
            batterystats_csvs = os.listdir(batterystats_csvs_dir)
            batterystats_csvs_joules = sorted([csv for csv in batterystats_csvs if csv.startswith("Joule_results")])

            if (len(perfume_csvs_fp) == num_trials and len(batterystats_csvs_joules) == num_trials):
                websites_done += [website]
                for trial in range(num_trials):
                    website_result = {"Website" : id, "Treatment" : prefix_treatment}
                    fp_value = np.genfromtxt(perfume_csvs_dir + perfume_csvs_fp[trial], skip_header=1)
                    fcp_value = np.genfromtxt(perfume_csvs_dir + perfume_csvs_fcp[trial], skip_header=1)
                    lt_value = np.genfromtxt(perfume_csvs_dir + perfume_csvs_lt[trial], skip_header=1)
                    joules_value = np.genfromtxt(batterystats_csvs_dir + batterystats_csvs_joules[trial], skip_header=1)

                    website_result["fp"] = fp_value
                    website_result["fcp"] = fcp_value
                    website_result["loadTime"] = lt_value
                    website_result["Joules"] = joules_value
                    website_result["Trial"] = trial

                    results += [website_result]
            else:
                print(len(perfume_csvs_fp), len(batterystats_csvs_joules), id, prefix_treatment)

    print("Retrieved data for", len(list(set(websites_done))), "website treatments out of", len(websites))
    return results

def write_results(data):
    with open(results_folder + experiment + "_results.csv", 'w+') as results:
        writer = csv.writer(results)
        writer.writerow(["Website", "Treatment", "FP", "FCP", "LT", "Joules"])

        for website_result in data:
            writer.writerow(website_dict_to_array_results(website_result))


data = get_data()
write_results(data)