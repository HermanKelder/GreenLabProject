library("dplyr")
library("ggpubr")
library(tidyverse)
library(car)
library(bestNormalize)
library(effsize)
library(ggplot2)

concat_chrome_prefixed = read_csv("../resources/concat_chrome_prefixed.csv")
concat_chrome_stripped = read_csv("../resources/concat_chrome_stripped.csv")
concat_firefox_prefixed = read_csv("../resources/concat_firefox_prefixed.csv")
concat_firefox_stripped = read_csv("../resources/concat_firefox_stripped.csv")
combined_stripped = read_csv("../resources/combined_stripped.csv")
combined_prefixed = read_csv("../resources/combined_prefixed.csv")

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

summary(concat_chrome_prefixed)
summary(concat_chrome_stripped)
summary(concat_firefox_prefixed)
summary(concat_firefox_stripped)
summary(combined_stripped)
summary(combined_prefixed)


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

boundry = 10
joules_min = min(combined_data$Joules) - boundry
joules_max = max(combined_data$Joules) + boundry

fcp_min = min(combined_data$FCP) - boundry
fcp_max = max(combined_data$FCP) + boundry

lt_min = min(combined_data$LT) - boundry
lt_max = max(combined_data$LT) + boundry


violin_ff_joules <- ggplot(ff_data, aes(x=Treatment, y=Joules, fill=Treatment)) + ggtitle("Firefox energy consumption") + 
  geom_violin(trim=FALSE, bw=1.5) + geom_boxplot(width=0.04, outlier.shape=NA, show.legend=FALSE) + ylim(joules_min, joules_max) + 
  scale_y_continuous(breaks=c(0, 20, 40, 60, 80)) + scale_fill_brewer(palette="Set3") +
  theme_minimal() + theme(plot.title = element_text(hjust=0.5, size=22), panel.border=element_rect(color="black", fill=NA, size=1), legend.position = "none")
print(violin_ff_joules)

violin_chrome_joules <- ggplot(chrome_data, aes(x=Treatment, y=Joules, fill=Treatment)) + ggtitle("Chrome energy consumption") + 
  geom_violin(trim=FALSE, bw=1.5) + geom_boxplot(width=0.04, outlier.shape=NA, show.legend=FALSE) + ylim(joules_min, joules_max) + 
  scale_y_continuous(breaks=c(0, 20, 40, 60, 80)) + scale_fill_brewer(palette="Set3") +
  theme_minimal() + theme(plot.title = element_text(hjust=0.5, size=22), panel.border=element_rect(color="black", fill=NA, size=1), legend.position = "none")
print(violin_chrome_joules)

violin_combined_joules <- ggplot(combined_data, aes(x=Treatment, y=Joules, fill=Treatment)) + ggtitle("Combined energy consumption") + 
  geom_violin(trim=FALSE, bw=1.5) + geom_boxplot(width=0.04, outlier.shape=NA, show.legend=FALSE) + ylim(joules_min, joules_max) + 
  scale_y_continuous(breaks=c(0, 20, 40, 60, 80)) + scale_fill_brewer(palette="Set3") +
  theme_minimal() + theme(plot.title = element_text(hjust=0.5, size=22), panel.border=element_rect(color="black", fill=NA, size=1), legend.position = "none")
print(violin_combined_joules)

violins_joule <- ggarrange(violin_ff_joules, violin_chrome_joules, violin_combined_joules, ncol=3, nrow=1)

print(violins_joule)





violin_ff_fcp <- ggplot(ff_data, aes(x=Treatment, y=FCP, fill=Treatment)) + ggtitle("Firefox First Contentful Paint") + 
  geom_violin(trim=FALSE, bw=3) + geom_boxplot(width=0.04, outlier.shape=NA, show.legend=FALSE) + ylim(fcp_min, fcp_max) + 
  scale_y_continuous(breaks=c(0, 5000, 10000, 15000, 20000, 25000)) + scale_fill_brewer(palette="Set3") +
  theme_minimal() + theme(plot.title = element_text(hjust=0.5, size=22), panel.border=element_rect(color="black", fill=NA, size=1), legend.position = "none")
print(violin_ff_fcp)

violin_chrome_fcp <- ggplot(chrome_data, aes(x=Treatment, y=FCP, fill=Treatment)) + ggtitle("Chrome First Contentful Paint") + 
  geom_violin(trim=FALSE, bw=3) + geom_boxplot(width=0.04, outlier.shape=NA, show.legend=FALSE) + ylim(fcp_min, fcp_max) +  
  scale_y_continuous(breaks=c(0, 5000, 10000, 15000, 20000, 25000)) + scale_fill_brewer(palette="Set3") +
  theme_minimal() + theme(plot.title = element_text(hjust=0.5, size=22), panel.border=element_rect(color="black", fill=NA, size=1), legend.position = "none")
print(violin_chrome_fcp)

violin_combined_fcp <- ggplot(combined_data, aes(x=Treatment, y=FCP, fill=Treatment)) + ggtitle("Combined First Contentful Paint") + 
  geom_violin(trim=FALSE, bw=3) + geom_boxplot(width=0.04, outlier.shape=NA, show.legend=FALSE) + ylim(fcp_min, fcp_max) + 
  scale_y_continuous(breaks=c(0, 5000, 10000, 15000, 20000, 25000)) + scale_fill_brewer(palette="Set3") +
  theme_minimal() + theme(plot.title = element_text(hjust=0.5, size=22), panel.border=element_rect(color="black", fill=NA, size=1), legend.position = "none")
print(violin_combined_fcp)

violins_fcp <- ggarrange(violin_ff_fcp, violin_chrome_fcp, violin_combined_fcp, ncol=3, nrow=1)

print(violins_fcp)







violin_ff_lt <- ggplot(ff_data, aes(x=Treatment, y=FCP, fill=Treatment)) + ggtitle("Firefox Load Times") + 
  geom_violin(trim=FALSE, bw=3) + geom_boxplot(width=0.04, outlier.shape=NA, show.legend=FALSE) + ylim(lt_min, lt_max) + 
  scale_y_continuous(breaks=c(0, 5000, 10000, 15000, 20000, 25000)) + scale_fill_brewer(palette="Set3") +
  theme_minimal() + theme(plot.title = element_text(hjust=0.5, size=22), panel.border=element_rect(color="black", fill=NA, size=1), legend.position = "none")
print(violin_ff_lt)

violin_chrome_lt <- ggplot(chrome_data, aes(x=Treatment, y=FCP, fill=Treatment)) + ggtitle("Chrome Load Times") + 
  geom_violin(trim=FALSE, bw=3) + geom_boxplot(width=0.04, outlier.shape=NA, show.legend=FALSE) + ylim(lt_min, lt_max) + 
  scale_y_continuous(breaks=c(0, 5000, 10000, 15000, 20000, 25000)) + scale_fill_brewer(palette="Set3") +
  theme_minimal() + theme(plot.title = element_text(hjust=0.5, size=22), panel.border=element_rect(color="black", fill=NA, size=1), legend.position = "none")
print(violin_chrome_lt)

violin_combined_lt <- ggplot(combined_data, aes(x=Treatment, y=FCP, fill=Treatment)) + ggtitle("Combined Load Times") + 
  geom_violin(trim=FALSE, bw=3) + geom_boxplot(width=0.04, outlier.shape=NA, show.legend=FALSE) + ylim(lt_min, lt_max) + 
  scale_y_continuous(breaks=c(0, 5000, 10000, 15000, 20000, 25000)) + scale_fill_brewer(palette="Set3") +
  theme_minimal() + theme(plot.title = element_text(hjust=0.5, size=22), panel.border=element_rect(color="black", fill=NA, size=1), legend.position = "none")
print(violin_combined_lt)

violins_lt <- ggarrange(violin_ff_lt, violin_chrome_lt, violin_combined_lt, ncol=3, nrow=1)

print(violins_lt)