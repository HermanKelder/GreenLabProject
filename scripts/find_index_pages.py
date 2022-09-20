#find command:
#find . -name "*index*.html"

PATH_TO_READ = "../resources/websites/"
import os

def process():
    bashCommand = 'cd ' + PATH_TO_READ + ' && find . -name "*index*.html" | grep -Po "^.{2}\K.*" | sort'
    os.system(bashCommand)

process()