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
ff_data_normjoules %>% predict %>% check_normality()

ff_data_normlt <- bestNormalize(ff_data$LT)
ff_data_normlt %>% predict %>% check_normality()

ff_data_normfcp <- bestNormalize(ff_data$FCP)
ff_data_normfcp %>% predict %>% check_normality()

# Plot energy consumption. 
ggplot(data=ff_data, aes(x=Joules, group=Treatment, fill=Treatment)) +
  geom_density(adjust=1.5, alpha=.2) + labs(caption = "Energy consumption using Firefox")

# Plot first contentful paint consumption. 
ggplot(data=ff_data, aes(x=FCP, group=Treatment, fill=Treatment)) +
  geom_density(adjust=1.5, alpha=.2) + labs(caption = "First contentful paint using Firefox")

# Plot load time consumption. 
ggplot(data=ff_data, aes(x=LT, group=Treatment, fill=Treatment)) +
  geom_density(adjust=1.5, alpha=.2) + labs(caption = "Load time using Firefox")
