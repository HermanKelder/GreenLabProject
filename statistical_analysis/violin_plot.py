import pandas as pd
import seaborn as bs
import numpy as np
import statsmodels.api as sm
import pylab as py
import matplotlib.pyplot as plt
from ansible_collections.community.aws.plugins.modules import sns

chrome = pd.read_csv('../results/chrome.csv')
firefox = pd.read_csv('../results/firefox.csv')
combined = chrome.append(firefox)
print(chrome)
group = "Joules"
title = "energy consumption"
boundry = 10
fig, axes = plt.subplots(ncols=3)
bs.violinplot(x='Treatment', y=group, data=chrome, palette='rainbow', ax=axes[0])
bs.violinplot(x='Treatment', y=group, data=firefox, palette='rainbow', ax=axes[1])
bs.violinplot(x='Treatment', y=group, data=combined, palette='rainbow', ax=axes[2])
axes[0].set(ylim=[min([chrome[group].min(), firefox[group].min()])-boundry, max(chrome[group].max(), firefox[group].max())+boundry])
axes[0].set(ylim=[min([chrome[group].min(), firefox[group].min()])-boundry, max(chrome[group].max(), firefox[group].max())+boundry])
axes[0].set_title('Chrome ' + title, fontweight ="bold")
axes[1].set(ylim=[min([chrome[group].min(), firefox[group].min()])-boundry, max(chrome[group].max(), firefox[group].max())+boundry])
axes[1].set_title('Firefox ' + title, fontweight ="bold")
axes[2].set(ylim=[min([chrome[group].min(), firefox[group].min()])-boundry, max(chrome[group].max(), firefox[group].max())+boundry])
axes[2].set_title('Combined '+ title, fontweight ="bold")
plt.show()