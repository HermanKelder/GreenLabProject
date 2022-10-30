# Scripts

This folder contains some scripts that were used to adapt the working of PerfumeJS in AndroidRunner and some scripts to download the test subjects and apply their CSS prefix treatments.

```NewAddJS.py``` is the replacement of the PerfumeJS AddJS.py in AndroidRunner. This replacement contains adapted JavaScript functionality (shown in the experiment folder README).
```NewServer.py``` is the replacement of the PerfumeJS Server.py in AndroidRunner. This replacement contains adaptations to handle the new JavaScript functionality from ```NewAddJS.py```.
```prefixer.sh``` and ```stripper.sh``` apply the corresponding CSS prefix treatment to a subject.
```find_index_pages.py``` locates the path to the index pages of the websites.
```download_websites.py``` downloads the subjects selected in a CSV file.