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

# Read data from csv.
chrome_data = read_csv("firefox.csv")
head(chrome_data)

# Remove columns with unnecessary or useless data.
chrome_data = chrome_data[-c(3, 7)]
head(chrome_data)

# Consider the treatment as a factor.
chrome_data = chrome_data %>% mutate_at(c('Treatment'), as.factor)

# Show what treatments there are and how the data looks.
levels(chrome_data$Treatment)
summary(chrome_data)

# Filter based on treatment when creating qq-plots.
# chrome_data = chrome_data %>% filter(Treatment == 'prefixed')
# chrome_data = chrome_data %>% filter(Treatment == 'stripped')
# summary(chrome_data)


# Create plots and check for normality.
# We see from the Shapiro-Wilk normality test that the p-value is 1e-16, so
# we can condfidently say the data is not normalized.
boxplot(Joules~Treatment, chrome_data)
check_normality(chrome_data$Joules)
check_normality(chrome_data$FCP)
check_normality(chrome_data$LT)

# Attempt to normalize the data.
par(mfrow=c(1,1))
chrome_data_normjoules <- bestNormalize(chrome_data$Joules)
#qqPlot(chrome_data$Joules, ylab = "Energy (J)",)
chrome_data_normjoules %>% predict %>% check_normality()

chrome_data_normlt <- bestNormalize(chrome_data$LT)
#qqPlot(chrome_data$LT, ylab = "Load time (ms)",)
chrome_data_normlt %>% predict %>% check_normality()

chrome_data_normfcp <- bestNormalize(chrome_data$FCP)
#qqPlot(chrome_data$FCP, ylab = "First contentful paint time (ms)",)
chrome_data_normfcp %>% predict %>% check_normality()

# Plot energy consumption. 
ggplot(data=chrome_data, aes(x=Joules, group=Treatment, fill=Treatment)) +
  geom_density(adjust=1.5, alpha=.2) + xlab("Energy (J)") + theme(legend.position=c(.9,.75))

# Plot first contentful paint consumption. 
ggplot(data=chrome_data, aes(x=FCP, group=Treatment, fill=Treatment)) +
  geom_density(adjust=1.5, alpha=.2) + xlab("First contentful paint time (ms)") + theme(legend.position=c(.9,.75))

# Plot load time consumption. 
ggplot(data=chrome_data, aes(x=LT, group=Treatment, fill=Treatment)) +
  geom_density(adjust=1.5, alpha=.2) + xlab("Load time (ms)") + theme(legend.position=c(.9,.75)) + xlim(c(0, 10000))

# Statistical tests
summary(chrome_data)
chrome_data_prefixed_cons = chrome_data %>% filter(Treatment == 'prefixed') %>% select("Joules") %>% unlist(use.names=FALSE)
chrome_data_stripped_cons = chrome_data %>% filter(Treatment == 'stripped') %>% select("Joules") %>% unlist(use.names=FALSE)
wilcox.test(chrome_data_prefixed_cons, chrome_data_stripped_cons)

chrome_data_prefixed_fcp = chrome_data %>% filter(Treatment == 'prefixed') %>% select("FCP") %>% unlist(use.names=FALSE)
chrome_data_stripped_fcp = chrome_data %>% filter(Treatment == 'stripped') %>% select("FCP") %>% unlist(use.names=FALSE)
wilcox.test(chrome_data_prefixed_fcp, chrome_data_stripped_fcp)

chrome_data_prefixed_lt = chrome_data %>% filter(Treatment == 'prefixed') %>% select("LT") %>% unlist(use.names=FALSE)
chrome_data_stripped_lt = chrome_data %>% filter(Treatment == 'stripped') %>% select("LT") %>% unlist(use.names=FALSE)
wilcox.test(chrome_data_prefixed_lt, chrome_data_stripped_lt)