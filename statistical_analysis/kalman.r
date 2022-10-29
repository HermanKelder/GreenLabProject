library(reticulate)
pklmn <- import("pykalman")
KalmanFilter <- pklmn$KalmanFilter
library(dplyr)
library(tidyverse)

kalman <- function(column_data) {
  kf = KalmanFilter(transition_matrices=list(list(1)), observation_matrices=list(list(1)))
  #print(column_data)
  kf = kf$em(column_data, n_iter=as.integer(5))
  #print(column_data)
  new_data = kf$filter(column_data)[1]
  #print(new_data)
  return(new_data)
}

# Import datasets.
ff_data = read_csv("../results/firefox.csv")
chrome_data = read_csv("../results/chrome.csv")

# Remove unnecessary columns and create a new one for the browser.
ff_data = ff_data[-c(3, 7)]
chrome_data = chrome_data[-c(3, 7)]
ff_data$Browser <- "Firefox"
chrome_data$Browser <- "Chrome"
summary(ff_data)
summary(chrome_data)

# Combine the datasets.
combined_data = rbind(ff_data, chrome_data)
summary(combined_data)

grouped_chrome = group_by(chrome_data, Website, Treatment) %>% mutate(Joules_kalman=kalman(Joules))
print(grouped_chrome)