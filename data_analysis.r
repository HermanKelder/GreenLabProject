library("dplyr")
library("ggpubr")
library(tidyverse)
library(car)
library(bestNormalize)
library(effsize)
library(ggplot2)

concat_chrome_prefixed = read_csv("/home/tim/vu/GreenLabProject-main/resources/concat_chrome_prefixed.csv")
concat_chrome_stripped = read_csv("/home/tim/vu/GreenLabProject-main/resources/concat_chrome_stripped.csv")
concat_firefox_prefixed = read_csv("/home/tim/vu/GreenLabProject-main/resources/concat_firefox_prefixed.csv")
concat_firefox_stripped = read_csv("/home/tim/vu/GreenLabProject-main/resources/concat_firefox_stripped.csv")
combined_stripped = read_csv("/home/tim/vu/GreenLabProject-main/resources/combined_stripped.csv")
combined_prefixed = read_csv("/home/tim/vu/GreenLabProject-main/resources/combined_prefixed.csv")

concat_chrome_prefixed_shapiro_energy = shapiro.test(concat_chrome_prefixed$Joules_kalman)
concat_chrome_stripped_shapiro_energy = shapiro.test(concat_chrome_stripped$Joules_kalman)
concat_firefox_prefixed_shapiro_energy = shapiro.test(concat_firefox_prefixed$Joules_kalman)
concat_firefox_stripped_shapiro_energy = shapiro.test(concat_firefox_stripped$Joules_kalman)
combined_stripped_shapiro_energy = shapiro.test(combined_stripped$Joules_kalman)
combined_prefixed_shapiro_energy = shapiro.test(combined_prefixed$Joules_kalman)

concat_chrome_prefixed_shapiro_lt = shapiro.test(concat_chrome_prefixed$LT_kalman)
concat_chrome_stripped_shapiro_lt = shapiro.test(concat_chrome_stripped$LT_kalman)
concat_firefox_prefixed_shapiro_lt = shapiro.test(concat_firefox_prefixed$LT_kalman)
concat_firefox_stripped_shapiro_lt = shapiro.test(concat_firefox_stripped$LT_kalman)
combined_stripped_shapiro_lt = shapiro.test(combined_stripped$LT_kalman)
combined_prefixed_shapiro_lt = shapiro.test(combined_prefixed$LT_kalman)

concat_chrome_prefixed_shapiro_fcp = shapiro.test(concat_chrome_prefixed$FCP_kalman)
concat_chrome_stripped_shapiro_fcp = shapiro.test(concat_chrome_stripped$FCP_kalman)
concat_firefox_prefixed_shapiro_fcp = shapiro.test(concat_firefox_prefixed$FCP_kalman)
concat_firefox_stripped_shapiro_fcp = shapiro.test(concat_firefox_stripped$FCP_kalman)
combined_stripped_shapiro_fcp = shapiro.test(combined_stripped$FCP_kalman)
combined_prefixed_shapiro_fcp = shapiro.test(combined_prefixed$FCP_kalman)

wilcox_energy_chrome = wilcox.test(concat_chrome_prefixed$Joules_kalman[0:453],concat_chrome_stripped$Joules_kalman[0:453], paired = TRUE)
wilcox_energy_firefox = wilcox.test(concat_firefox_prefixed$Joules_kalman[0:480],concat_firefox_stripped$Joules_kalman[0:480], paired = TRUE)
wilcox_energy_combined = wilcox.test(combined_stripped$Joules_kalman[0:933],combined_prefixed$Joules_kalman[0:933], paired = TRUE)

wilcox_lt_chrome = wilcox.test(concat_chrome_prefixed$LT_kalman[0:453],concat_chrome_stripped$LT_kalman[0:453], paired = TRUE)
wilcox_lt_firefox = wilcox.test(concat_firefox_prefixed$LT_kalman[0:480],concat_firefox_stripped$LT_kalman[0:480], paired = TRUE)
wilcox_lt_combined = wilcox.test(combined_stripped$LT_kalman[0:933],combined_prefixed$LT_kalman[0:933], paired = TRUE)

wilcox_fcp_chrome = wilcox.test(concat_chrome_prefixed$FCP_kalman[0:453],concat_chrome_stripped$FCP_kalman[0:453], paired = TRUE)
wilcox_fcp_firefox = wilcox.test(concat_firefox_prefixed$FCP_kalman[0:480],concat_firefox_stripped$FCP_kalman[0:480], paired = TRUE)
wilcox_fcp_combined = wilcox.test(combined_stripped$FCP_kalman[0:933],combined_prefixed$FCP_kalman[0:933], paired = TRUE)

cliffs_delta_energy_chrome = cliff.delta(concat_chrome_prefixed$Joules_kalman[0:453],concat_chrome_stripped$Joules_kalman[0:453])

