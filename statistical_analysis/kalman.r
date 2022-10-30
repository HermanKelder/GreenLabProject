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
ff_data$Browser <- "Firefox"
chrome_data$Browser <- "Chrome"
summary(ff_data)
summary(chrome_data)

# Combine the datasets.
combined_data = rbind(ff_data, chrome_data)
summary(combined_data)

kalman_chrome = group_by(chrome_data, Website, Treatment) %>% mutate(Joules_kalman=kalman(Joules)) %>% mutate(group_index=row_number(Treatment)) %>% ungroup() %>% mutate(Joules_kalman=mapply(function(l, i) l[i], Joules_kalman, group_index))
kalman_chrome = group_by(kalman_chrome, Website, Treatment) %>% mutate(FCP_kalman=kalman(FCP)) %>% ungroup() %>% mutate(FCP_kalman=mapply(function(l, i) l[i], FCP_kalman, group_index))
kalman_chrome = group_by(kalman_chrome, Website, Treatment) %>% mutate(LT_kalman=kalman(LT)) %>% ungroup() %>% mutate(LT_kalman=mapply(function(l, i) l[i], LT_kalman, group_index))
kalman_chrome = kalman_chrome[-c(8, 10)]
print(kalman_chrome)
write.csv(kalman_chrome, "kalman_chrome.csv")

kalman_ff = group_by(ff_data, Website, Treatment) %>% mutate(Joules_kalman=kalman(Joules)) %>% mutate(group_index=row_number(Treatment)) %>% ungroup() %>% mutate(Joules_kalman=mapply(function(l, i) l[i], Joules_kalman, group_index))
kalman_ff = group_by(kalman_ff, Website, Treatment) %>% mutate(FCP_kalman=kalman(FCP)) %>% ungroup() %>% mutate(FCP_kalman=mapply(function(l, i) l[i], FCP_kalman, group_index))
kalman_ff = group_by(kalman_ff, Website, Treatment) %>% mutate(LT_kalman=kalman(LT)) %>% ungroup() %>% mutate(LT_kalman=mapply(function(l, i) l[i], LT_kalman, group_index))
kalman_ff = kalman_ff[-c(8, 10)]
print(kalman_ff)
write.csv(kalman_ff, "kalman_firefox.csv")


write.csv(kalman_ff %>% filter(Treatment == 'prefixed'), "../resources/concat_firefox_prefixed.csv")
write.csv(kalman_ff %>% filter(Treatment == 'stripped'), "../resources/concat_firefox_stripped.csv")

write.csv(kalman_chrome %>% filter(Treatment == 'prefixed'), "../resources/concat_chrome_prefixed.csv")
write.csv(kalman_chrome %>% filter(Treatment == 'stripped'), "../resources/concat_chrome_stripped.csv")

write.csv(rbind(kalman_chrome %>% filter(Treatment == 'prefixed'), kalman_ff %>% filter(Treatment == 'prefixed')), "../resources/combined_prefixed.csv")
write.csv(rbind(kalman_chrome %>% filter(Treatment == 'stripped'), kalman_ff %>% filter(Treatment == 'stripped')), "../resources/combined_stripped.csv")