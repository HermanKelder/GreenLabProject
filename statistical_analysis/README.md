# Statistical Analysis

This folder contains the R code for the statistical analysis performed on the results of the experiments.

```kalman.r``` performs a Kalman filter (filter outliers) on the aggregated data and stores the result in the ```resources``` folder.

```firefox_analysis.r```, ```chrome_analysis.r```, and ```combined_analysis.r``` display some descriptive statistics and density plots for the browsers individually and their combination.

The main data analysis is performed in ```data_analysis.r```. Here the descriptive statistics, violin plot, Shapiro-Wilk test, Wilcoxon Signed Rank test, and Cliff's delta test are performed/generated using the data from the Kalman filter.