#wget command:
#wget -E -H -k -K --no-check-certificate -U 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.6) Gecko/20070802 SeaMonkey/1.1.4' -p -P ./targetFolder2 https://www.facebook.com

PATH_TO_CSV = "../resources/websites.csv"
PATH_TO_SAVE = "../resources/websites/"
import os

def process(index, url):
    folderName = PATH_TO_SAVE + index + "_" + url

    bashCommand = "wget -E -H -k -K --no-check-certificate -U 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.1.6) Gecko/20070802 SeaMonkey/1.1.4' -p -P " + folderName + " " + url
    os.system(bashCommand)
    # print(folderName)

with open(PATH_TO_CSV, "r") as file:
    for line in file:
        line = map(str.strip, line.split(","))
        index, url = line

        process(index, url)
        print(index + "_" + url)
        if index >= 5:
            break