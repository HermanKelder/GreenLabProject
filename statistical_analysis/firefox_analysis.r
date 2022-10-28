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
ff_data = read_csv("firefox.csv")
head(ff_data)

# Remove columns with unnecessary or useless data.
ff_data = ff_data[-c(3, 7)]
head(ff_data)

# Consider the treatment as a factor.
ff_data = ff_data %>% mutate_at(c('Treatment'), as.factor)

# Show what treatments there are and how the data looks.
levels(ff_data$Treatment)
summary(ff_data)

# Filter based on treatment when creating qq-plots.
# ff_data = ff_data %>% filter(Treatment == 'prefixed')
# ff_data = ff_data %>% filter(Treatment == 'stripped')
# summary(ff_data)


# Create plots and check for normality.
# We see from the Shapiro-Wilk normality test that the p-value is 1e-16, so
# we can condfidently say the data is not normalized.
boxplot(Joules~Treatment, ff_data)
check_normality(ff_data$Joules)
check_normality(ff_data$FCP)
check_normality(ff_data$LT)

# Attempt to normalize the data.
par(mfrow=c(1,1))
ff_data_normjoules <- bestNormalize(ff_data$Joules)
#qqPlot(ff_data$Joules, ylab = "Energy (J)",)
ff_data_normjoules %>% predict %>% check_normality()

ff_data_normlt <- bestNormalize(ff_data$LT)
#qqPlot(ff_data$LT, ylab = "Load time (ms)",)
ff_data_normlt %>% predict %>% check_normality()

ff_data_normfcp <- bestNormalize(ff_data$FCP)
#qqPlot(ff_data$FCP, ylab = "First contentful paint time (ms)",)
ff_data_normfcp %>% predict %>% check_normality()

# Plot energy consumption. 
ggplot(data=ff_data, aes(x=Joules, group=Treatment, fill=Treatment)) +
  geom_density(adjust=1.5, alpha=.2) + xlab("Energy (J)") + theme(legend.position=c(.9,.75))

# Plot first contentful paint consumption. 
ggplot(data=ff_data, aes(x=FCP, group=Treatment, fill=Treatment)) +
  geom_density(adjust=1.5, alpha=.2) + xlab("First contentful paint time (ms)") + theme(legend.position=c(.9,.75))

# Plot load time consumption. 
ggplot(data=ff_data, aes(x=LT, group=Treatment, fill=Treatment)) +
  geom_density(adjust=1.5, alpha=.2) + xlab("Load time (ms)") + theme(legend.position=c(.9,.75)) + xlim(c(0, 10000))