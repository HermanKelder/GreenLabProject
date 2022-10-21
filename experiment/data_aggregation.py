import os
import csv
import numpy as np

base_dir = '/home/pi/experiment/output'
experiment = '/2022.10.18_162413'
data = '/data/tank'
browsers = ['chrome']
num_trials = 10
results_folder = '/home/pi/experiment'
results_order = ["Website", "Treatment", "fp", "fcp", "loadTime", "Joules", "Trial"]

def website_dict_to_array_results(website_dict):
    return [website_dict[results_order[i]] for i in range(len(results_order))]

def datetime_match(time1, time2):
    year1 = time1[:4]
    year2 = time2[:4]

    month1 = time1[4:6]
    month2 = time2[4:6]

    day1 = time1[6:8]
    day2 = time2[6:8]

    h1 = int(time1[8:10])
    h2 = int(time2[8:10])

    m1 = int(time1[10:12])
    m2 = int(time2[10:12])

    s1 = int(time1[12:])
    s2 = int(time2[12:])

    if year1 == year2:
        if month1 == month2:
            if day1 == day2:
                if h1 == h2:
                    if m1 <= m2 + 2 and m1 >= m2 - 2:
                        return 1
                elif h1 == h2 + 1:
                    if m1 < 2 and m2 > 58:
                        return 1
                elif h1 == h2 - 1:
                    if m2 < 2 and m1 > 58:
                        return 1

    return 0

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

            batterystats_csvs_joules_datetime = [''.join(''.join(csv.split(":")[1].split("_")[1:]).split(".")[:-1]) for csv in batterystats_csvs_joules]
            perfume_csvs_lt_datetime = [''.join(''.join(csv.split("_")[2:]).split(".")[:-1]) for csv in perfume_csvs_lt]

            valid_indices = []

            current_index = 0
            for p in perfume_csvs_lt_datetime:
                for i, b in enumerate(batterystats_csvs_joules_datetime[current_index:]):
                    if datetime_match(p, b):
                        valid_indices += [i]
                        current_index = i + 1
                        break

            batterystats_csvs_joules = [batterystats_csvs_joules[i] for i in valid_indices]

            if (len(perfume_csvs_fp) == len(batterystats_csvs_joules)):
                websites_done += [website]
                for trial in range(len(perfume_csvs_fp)):
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
        writer.writerow(["Website", "Treatment", "FP", "FCP", "LT", "Joules", "Trial"])

        for website_result in data:
            writer.writerow(website_dict_to_array_results(website_result))


data = get_data()
write_results(data)