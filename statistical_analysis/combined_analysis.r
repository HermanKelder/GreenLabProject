library(tidyverse)
library(car)
library(bestNormalize)
library(effsize)
library(ggplot2)
library(svglite)
library(bestNormalize)
library(hrbrthemes)
library(dplyr)
library(tidyr)
library(viridis)

# Define function to check for normality.
check_normality <- function(data) {
  par(mfrow=c(1,2))
  plot(density(data))
  car::qqPlot(data)
  print(shapiro.test(data))
  par(mfrow=c(1,1))
}

# Import datasets.
ff_data = read_csv("firefox.csv")
chrome_data = read_csv("chrome.csv")

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

# Consider the treatment and browser as a factor.
combined_data = combined_data %>% mutate_at(c('Treatment'), as.factor)
combined_data = combined_data %>% mutate_at(c('Browser'), as.factor)

# Show what treatments there are and how the data looks.
levels(combined_data$Treatment)
levels(combined_data$Browser)
summary(combined_data)

# Normalize data.
combined_data = bestNormalize(combined_data)

# Statistical tests for Chrome.
summary(combined_data)
combined_data_prefixed_cons = combined_data %>% filter(Browser == 'Chrome', Treatment == 'prefixed', ) %>% select("Joules") %>% unlist(use.names=FALSE)
combined_data_stripped_cons = combined_data %>% filter(Browser == 'Chrome', Treatment == 'stripped') %>% select("Joules") %>% unlist(use.names=FALSE)
wilcox.test(combined_data_prefixed_cons, combined_data_stripped_cons)

combined_data_prefixed_fcp = combined_data %>% filter(Browser == 'Chrome', Treatment == 'prefixed') %>% select("FCP") %>% unlist(use.names=FALSE)
combined_data_stripped_fcp = combined_data %>% filter(Browser == 'Chrome', Treatment == 'stripped') %>% select("FCP") %>% unlist(use.names=FALSE)
wilcox.test(combined_data_prefixed_fcp, combined_data_stripped_fcp)

combined_data_prefixed_lt = combined_data %>% filter(Browser == 'Chrome', Treatment == 'prefixed') %>% select("LT") %>% unlist(use.names=FALSE)
combined_data_stripped_lt = combined_data %>% filter(Browser == 'Chrome', Treatment == 'stripped') %>% select("LT") %>% unlist(use.names=FALSE)
wilcox.test(combined_data_prefixed_lt, combined_data_stripped_lt)

# Statistical tests for Firefox.
summary(combined_data)
combined_data_prefixed_cons = combined_data %>% filter(Browser == 'Firefox', Treatment == 'prefixed', ) %>% select("Joules") %>% unlist(use.names=FALSE)
combined_data_stripped_cons = combined_data %>% filter(Browser == 'Firefox', Treatment == 'stripped') %>% select("Joules") %>% unlist(use.names=FALSE)
wilcox.test(combined_data_prefixed_cons, combined_data_stripped_cons)

combined_data_prefixed_fcp = combined_data %>% filter(Browser == 'Firefox', Treatment == 'prefixed') %>% select("FCP") %>% unlist(use.names=FALSE)
combined_data_stripped_fcp = combined_data %>% filter(Browser == 'Firefox', Treatment == 'stripped') %>% select("FCP") %>% unlist(use.names=FALSE)
wilcox.test(combined_data_prefixed_fcp, combined_data_stripped_fcp)

combined_data_prefixed_lt = combined_data %>% filter(Browser == 'Firefox', Treatment == 'prefixed') %>% select("LT") %>% unlist(use.names=FALSE)
combined_data_stripped_lt = combined_data %>% filter(Browser == 'Firefox', Treatment == 'stripped') %>% select("LT") %>% unlist(use.names=FALSE)
wilcox.test(combined_data_prefixed_lt, combined_data_stripped_lt)

# Statistical tests for both combined.
summary(combined_data)
combined_data_prefixed_cons = combined_data %>% filter(Treatment == 'prefixed', ) %>% select("Joules") %>% unlist(use.names=FALSE)
combined_data_stripped_cons = combined_data %>% filter(Treatment == 'stripped') %>% select("Joules") %>% unlist(use.names=FALSE)
wilcox.test(combined_data_prefixed_cons, combined_data_stripped_cons)

combined_data_prefixed_fcp = combined_data %>% filter(Treatment == 'prefixed') %>% select("FCP") %>% unlist(use.names=FALSE)
combined_data_stripped_fcp = combined_data %>% filter(Treatment == 'stripped') %>% select("FCP") %>% unlist(use.names=FALSE)
wilcox.test(combined_data_prefixed_fcp, combined_data_stripped_fcp)

combined_data_prefixed_lt = combined_data %>% filter(Treatment == 'prefixed') %>% select("LT") %>% unlist(use.names=FALSE)
combined_data_stripped_lt = combined_data %>% filter(Treatment == 'stripped') %>% select("LT") %>% unlist(use.names=FALSE)
wilcox.test(combined_data_prefixed_lt, combined_data_stripped_lt)

