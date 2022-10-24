import pandas as pd
from scipy.stats import shapiro
from scipy.stats import mannwhitneyu
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

def data_print(data, flag):
    print("{: <30} {:<10.2f} {:<10.2f} {:<10.2f} {:<10.2f} {:<10.2f} {:<10.2f} {:<10.2f}".format(flag, data.mean(), data.std(), data.min(), data.quantile(q=0.25), data.median(), data.quantile(q=0.75), data.max()))

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



chrome = pd.read_csv('chrome.csv')
firefox = pd.read_csv('firefox.csv')
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

combined_stripped = pd.concat([concat_chrome_stripped, concat_firefox_stripped], ignore_index=True, sort=False)
combined_prefixed = pd.concat([concat_chrome_prefixed, concat_firefox_prefixed], ignore_index=True, sort=False)

results_chrome_energy = mannwhitneyu(concat_chrome_prefixed['Joules_kalman'], concat_chrome_stripped['Joules_kalman'])
results_firefox_energy = mannwhitneyu(concat_firefox_prefixed['Joules_kalman'], concat_firefox_stripped['Joules_kalman'])
results_combined_energy = mannwhitneyu(combined_stripped['Joules_kalman'], combined_prefixed['Joules_kalman'])

results_chrome_fcp = mannwhitneyu(concat_chrome_prefixed['FCP_kalman'], concat_chrome_stripped['FCP_kalman'])
results_firefox_fcp = mannwhitneyu(concat_firefox_prefixed['FCP_kalman'], concat_firefox_stripped['FCP_kalman'])
results_combined_fcp = mannwhitneyu(combined_stripped['FCP_kalman'], combined_prefixed['FCP_kalman'])

results_chrome_lt = mannwhitneyu(concat_chrome_prefixed['LT_kalman'], concat_chrome_stripped['LT_kalman'])
results_firefox_lt = mannwhitneyu(concat_firefox_prefixed['LT_kalman'], concat_firefox_stripped['LT_kalman'])
results_combined_lt = mannwhitneyu(combined_stripped['LT_kalman'], combined_prefixed['LT_kalman'])

print("mannwhitneyu results")
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

print("\nEnergy (J)")
print("{: <30} {:<10} {:<10} {:<10} {:<10} {:<10} {:<10} {:<10}".format("", "mean", "std", "min", "25%", "median", "75%", "max"))
data_print(concat_chrome_prefixed['Joules_kalman'], "concat_chrome_prefixed")
data_print(concat_chrome_stripped['Joules_kalman'], "concat_chrome_stripped")
data_print(concat_firefox_prefixed['Joules_kalman'], "concat_firefox_prefixed")
data_print(concat_firefox_stripped['Joules_kalman'], "concat_firefox_stripped")
data_print(combined_prefixed['Joules_kalman'], "combined_prefixed")
data_print(combined_stripped['Joules_kalman'], "combined_stripped")


print("\nFCP (ms)")
print("{: <30} {:<10} {:<10} {:<10} {:<10} {:<10} {:<10} {:<10}".format("", "mean", "std", "min", "25%", "median", "75%", "max"))
data_print(concat_chrome_prefixed['FCP_kalman'], "concat_chrome_prefixed")
data_print(concat_chrome_stripped['FCP_kalman'], "concat_chrome_stripped")
data_print(concat_firefox_prefixed['FCP_kalman'], "concat_firefox_prefixed")
data_print(concat_firefox_stripped['FCP_kalman'], "concat_firefox_stripped")
data_print(combined_prefixed['FCP_kalman'], "combined_prefixed")
data_print(combined_stripped['FCP_kalman'], "combined_stripped")

print("\nLT (ms)")
print("{: <30} {:<10} {:<10} {:<10} {:<10} {:<10} {:<10} {:<10}".format("", "mean", "std", "min", "25%", "median", "75%", "max"))
data_print(concat_chrome_prefixed['LT_kalman'], "concat_chrome_prefixed")
data_print(concat_chrome_stripped['LT_kalman'], "concat_chrome_stripped")
data_print(concat_firefox_prefixed['LT_kalman'], "concat_firefox_prefixed")
data_print(concat_firefox_stripped['LT_kalman'], "concat_firefox_stripped")
data_print(combined_prefixed['LT_kalman'], "combined_prefixed")
data_print(combined_stripped['LT_kalman'], "combined_stripped")
