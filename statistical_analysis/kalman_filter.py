import pandas as pd
from scipy.stats import shapiro
from scipy.stats import wilcoxon
import matplotlib
import matplotlib.pyplot as plt
import numpy as np
import re
import copy
from datetime import datetime, timedelta
import functools
from pathlib import Path


import numpy as np
from pykalman import KalmanFilter

# Implements the Kalman filter for single columns.
class KalmanFilters:

    # Very simple Kalman filter: fill missing values and remove outliers for single attribute.
    # We assume a very simple transition matrix, namely simply a [[1]]. It
    # is however still useful as it is able to dampen outliers and impute missing values. The new
    # values are appended in a new column.
    def apply_kalman_filter(self, data_table, col):

        # Initialize the Kalman filter with the trivial transition and observation matrices.
        kf = KalmanFilter(transition_matrices=[[1]], observation_matrices=[[1]])

        numpy_array_state = data_table[col].values
        numpy_array_state = numpy_array_state.astype(np.float32)
        numpy_matrix_state_with_mask = np.ma.masked_invalid(numpy_array_state)

        # Find the best other parameters based on the data (e.g. Q)
        kf = kf.em(numpy_matrix_state_with_mask, n_iter=5)

        # And apply the filter.
        (new_data, filtered_state_covariances) = kf.filter(numpy_matrix_state_with_mask)

        data_table[col + '_kalman'] = new_data
        return data_table



chrome = pd.read_csv('results/chrome.csv')
firefox = pd.read_csv('results/firefox.csv')
KalFilter = KalmanFilters()

grouped_chrome = chrome.groupby(['Website'])
grouped_firefox = firefox.groupby(['Website'])

intermediate_chrome = []
intermediate_firefox = []

for x in grouped_firefox:
    intermediate_firefox.append(x[1].groupby('Treatment'))

for x in grouped_chrome:
    intermediate_chrome.append(x[1].groupby('Treatment'))


final_chrome = []
final_firefox = []
y = 0
for x in intermediate_firefox:
    final_firefox.append([list(intermediate_firefox[y])[0][1].reset_index().drop('index', axis=1),
                                    list(intermediate_firefox[y])[1][1].reset_index().drop('index', axis=1)])
    y = y + 1

y = 0
for x in intermediate_chrome:
    final_chrome.append([list(intermediate_chrome[y])[0][1].reset_index().drop('index', axis=1),
                                   list(intermediate_chrome[y])[1][1].reset_index().drop('index', axis=1)])
    y = y + 1


kalman_chrome = []
kalman_firefox = []
kalman_chrome_fcp = []
kalman_firefox_fcp = []
kalman_chrome_lt = []
kalman_firefox_lt = []

for x in final_chrome:
    kalman_chrome.append([KalFilter.apply_kalman_filter( x[0], "Joules"),KalFilter.apply_kalman_filter( x[1], 'Joules')])

for x in final_firefox:
    kalman_firefox.append([KalFilter.apply_kalman_filter( x[0], "Joules"),KalFilter.apply_kalman_filter( x[1], 'Joules')])

for x in final_chrome:
    kalman_chrome_fcp.append([KalFilter.apply_kalman_filter( x[0], "FCP"),KalFilter.apply_kalman_filter( x[1], 'FCP')])

for x in final_firefox:
    kalman_firefox_fcp.append([KalFilter.apply_kalman_filter( x[0], "FCP"),KalFilter.apply_kalman_filter( x[1], 'FCP')])

for x in final_chrome:
    kalman_chrome_lt.append([KalFilter.apply_kalman_filter( x[0], "LT"),KalFilter.apply_kalman_filter( x[1], 'LT')])

for x in final_firefox:
    kalman_firefox_lt.append([KalFilter.apply_kalman_filter( x[0], "LT"),KalFilter.apply_kalman_filter( x[1], 'LT')])

for x in range(0, len(kalman_chrome)):
    kalman_chrome[x][0]["FCP_kalman"] = kalman_chrome_fcp[x][0]["FCP_kalman"]
    kalman_chrome[x][1]["FCP_kalman"] = kalman_chrome_fcp[x][1]["FCP_kalman"]
    kalman_chrome[x][0]["LT_kalman"] = kalman_chrome_lt[x][0]["LT_kalman"]
    kalman_chrome[x][1]["LT_kalman"] = kalman_chrome_lt[x][1]["LT_kalman"]

for x in range(0, len(kalman_chrome)):
    kalman_firefox[x][0]["FCP_kalman"] = kalman_firefox_fcp[x][0]["FCP_kalman"]
    kalman_firefox[x][1]["LT_kalman"] = kalman_firefox_lt[x][1]["LT_kalman"]
    kalman_firefox[x][0]["FCP_kalman"] = kalman_firefox_fcp[x][0]["FCP_kalman"]
    kalman_firefox[x][1]["LT_kalman"] = kalman_firefox_lt[x][1]["LT_kalman"]

concat_chrome_prefixed = pd.DataFrame()
concat_chrome_stripped = pd.DataFrame()
concat_firefox_prefixed = pd.DataFrame()
concat_firefox_stripped = pd.DataFrame()

for x in kalman_firefox:
    concat_firefox_prefixed = pd.concat([concat_firefox_prefixed, x[0]], ignore_index=True, sort=False)
    concat_firefox_stripped = pd.concat([x[1], concat_firefox_stripped], ignore_index=True, sort=False)


for x in kalman_chrome:
    concat_chrome_prefixed = pd.concat([concat_chrome_prefixed, x[0]], ignore_index=True, sort=False)
    concat_chrome_stripped = pd.concat([concat_chrome_stripped, x[1]], ignore_index=True, sort=False)


concat_chrome_prefixed.reset_index().drop('index', axis=1)
concat_chrome_stripped.reset_index().drop('index', axis=1)
concat_firefox_prefixed.reset_index().drop('index', axis=1)
concat_firefox_stripped.reset_index().drop('index', axis=1)
combined_stripped = pd.concat([concat_chrome_stripped, concat_firefox_stripped], ignore_index=True, sort=False)
combined_prefixed = pd.concat([concat_chrome_prefixed, concat_firefox_prefixed], ignore_index=True, sort=False)

concat_chrome_prefixed.to_csv("resources/concat_chrome_prefixed.csv")
concat_chrome_stripped.to_csv("resources/concat_chrome_stripped.csv")
concat_firefox_prefixed.to_csv("resources/concat_firefox_prefixed.csv")
concat_firefox_stripped.to_csv("resources/concat_firefox_stripped.csv")
combined_stripped.to_csv("resources/combined_stripped.csv")
combined_prefixed.to_csv("resources/combined_prefixed.csv")

shapiro_chrome_prefixed_energy = shapiro(concat_chrome_prefixed['Joules_kalman'])
shapiro_chrome_stripped_energy = shapiro(concat_chrome_stripped['Joules_kalman'])
shapiro_firefox_prefixed_energy = shapiro(concat_firefox_prefixed['Joules_kalman'])
shapiro_firefox_stripped_energy = shapiro(concat_firefox_stripped['Joules_kalman'])

shapiro_chrome_prefixed_fcp = shapiro(concat_chrome_prefixed['FCP_kalman'])
shapiro_chrome_stripped_fcp = shapiro(concat_chrome_stripped['FCP_kalman'])
shapiro_firefox_prefixed_fcp = shapiro(concat_firefox_prefixed['FCP_kalman'])
shapiro_firefox_stripped_fcp = shapiro(concat_firefox_stripped['FCP_kalman'])

shapiro_chrome_prefixed_lt = shapiro(concat_chrome_prefixed['LT_kalman'])
shapiro_chrome_stripped_lt = shapiro(concat_chrome_stripped['LT_kalman'])
shapiro_firefox_prefixed_lt = shapiro(concat_firefox_prefixed['LT_kalman'])
shapiro_firefox_stripped_lt = shapiro(concat_firefox_stripped['LT_kalman'])

print("SHAPIRO RESULTS")
print("shapiro_chrome_prefixed energy: " )
print(shapiro_chrome_prefixed_energy)
print("\nshapiro_firefox_stripped energy: ")
print(shapiro_firefox_prefixed_energy)
print("\nshapiro_chrome_prefixed energy: " )
print(shapiro_chrome_stripped_energy)
print("\nshapiro_firefox_stripped energy: ")
print(shapiro_firefox_stripped_energy)

print("shapiro_chrome_prefixed fcp: " )
print(shapiro_chrome_prefixed_fcp)
print("\nshapiro_firefox_stripped fcp: ")
print(shapiro_firefox_prefixed_fcp)
print("\nshapiro_chrome_prefixed fcp: " )
print(shapiro_chrome_stripped_fcp)
print("\nshapiro_firefox_stripped fcp: ")
print(shapiro_firefox_stripped_fcp)

print("shapiro_chrome_prefixed lt: " )
print(shapiro_chrome_prefixed_lt)
print("\nshapiro_firefox_stripped lt: ")
print(shapiro_firefox_prefixed_lt)
print("\nshapiro_chrome_prefixed lt: " )
print(shapiro_chrome_stripped_lt)
print("\nshapiro_firefox_stripped energy lt: ")
print(shapiro_firefox_stripped_lt)
print("\n\n")



shapiro_combined_prefixed_joule = shapiro(combined_prefixed['Joules'])
shapiro_combined_stripped_joule = shapiro(combined_stripped['Joules'])
shapiro_combined_prefixed_lt = shapiro(combined_prefixed['LT_kalman'])
shapiro_combined_stripped_lt = shapiro(combined_stripped['LT_kalman'])
shapiro_combined_prefixed_fcp = shapiro(combined_prefixed['FCP_kalman'])
shapiro_combined_stripped_fcp = shapiro(combined_stripped['FCP_kalman'])

print("\nshapiro_combined_prefixed_joule: ")
print(shapiro_combined_prefixed_joule)

print("\nshapiro_combined_stripped_joule: ")
print(shapiro_combined_stripped_joule)

print("\nshapiro_combined_prefixed_lt: ")
print(shapiro_combined_prefixed_lt)

print("\nshapiro_combined_stripped_lt: ")
print(shapiro_combined_stripped_lt)

print("\nshapiro_combined_prefixed_fcp: ")
print(shapiro_combined_prefixed_fcp)

print("\nshapiro_combined_stripped_fcp: ")
print(shapiro_combined_stripped_fcp)
print(len(concat_chrome_prefixed), len(concat_chrome_stripped))
print(len(concat_firefox_prefixed), len(concat_firefox_stripped))
print(len(combined_stripped), len(combined_prefixed))
results_chrome_energy = wilcoxon(concat_chrome_prefixed['Joules_kalman'][0:453], concat_chrome_stripped['Joules_kalman'][0:453])
results_firefox_energy = wilcoxon(concat_firefox_prefixed['Joules_kalman'][0:480], concat_firefox_stripped['Joules_kalman'][0:480])
results_combined_energy = wilcoxon(combined_stripped['Joules_kalman'][0:933], combined_prefixed['Joules_kalman'][0:933])

results_chrome_fcp = wilcoxon(concat_chrome_prefixed['FCP_kalman'][0:453], concat_chrome_stripped['FCP_kalman'][0:453])
results_firefox_fcp = wilcoxon(concat_firefox_prefixed['FCP_kalman'][0:480], concat_firefox_stripped['FCP_kalman'][0:480])
results_combined_fcp = wilcoxon(combined_stripped['FCP_kalman'][0:933], combined_prefixed['FCP_kalman'][0:933])

results_chrome_lt = wilcoxon(concat_chrome_prefixed['LT_kalman'][0:453], concat_chrome_stripped['LT_kalman'][0:453])
results_firefox_lt = wilcoxon(concat_firefox_prefixed['LT_kalman'][0:480], concat_firefox_stripped['LT_kalman'][0:480])
results_combined_lt = wilcoxon(combined_stripped['LT_kalman'][0:933], combined_prefixed['LT_kalman'][0:933])

print("wilcoxon results")
print("chrome energy: " )
print(results_chrome_energy)
print("\nfirefox energy: ")
print(results_firefox_energy)
print("\ncombined energy: " )
print(results_combined_energy)

print("chrome fcp: " )
print(results_chrome_fcp)
print("\nfirefox fcp: ")
print(results_firefox_fcp)
print("\ncombined fcp: " )
print(results_combined_fcp)

print("chrome lt: " )
print(results_chrome_lt)
print("\nfirefox lt: ")
print(results_firefox_lt)
print("\ncombined lt: " )
print(results_combined_lt)
print("\n\n")

print("mean results")
print("mean concat_chrome_prefixed energy: " )
print(concat_chrome_prefixed['Joules_kalman'].mean())
print("\nmean concat_chrome_stripped energy: ")
print(concat_chrome_stripped['Joules_kalman'].mean())
print("\nmean concat_firefox_prefixed energy: " )
print(concat_firefox_prefixed['Joules_kalman'].mean())
print("\nmean concat_firefox_stripped energy: ")
print(concat_firefox_stripped['Joules_kalman'].mean())
print("\nmean combined_stripped energy: " )
print(combined_stripped['Joules_kalman'].mean())
print("\nmean combined_prefixed energy: " )
print(combined_prefixed['Joules_kalman'].mean())

print("mean concat_chrome_prefixed fcp: " )
print(concat_chrome_prefixed['FCP_kalman'].mean())
print("\nmean concat_chrome_stripped fcp: ")
print(concat_chrome_stripped['FCP_kalman'].mean())
print("\nmean concat_firefox_prefixed fcp: " )
print(concat_firefox_prefixed['FCP_kalman'].mean())
print("\nmean concat_firefox_stripped fcp: ")
print(concat_firefox_stripped['FCP_kalman'].mean())
print("\nmean combined_stripped fcp: " )
print(combined_stripped['FCP_kalman'].mean())
print("\nmean combined_prefixed fcp: " )
print(combined_prefixed['FCP_kalman'].mean())

print("mean concat_chrome_prefixed lt: " )
print(concat_chrome_prefixed['LT_kalman'].mean())
print("\nmean concat_chrome_stripped lt: ")
print(concat_chrome_stripped['LT_kalman'].mean())
print("\nmean concat_firefox_prefixed lt: " )
print(concat_firefox_prefixed['LT_kalman'].mean())
print("\nmean concat_firefox_stripped lt: ")
print(concat_firefox_stripped['LT_kalman'].mean())
print("\nmean combined_stripped lt: " )
print(combined_stripped['LT_kalman'].mean())
print("\nmean combined_prefixed lt: " )
print(combined_prefixed['LT_kalman'].mean())