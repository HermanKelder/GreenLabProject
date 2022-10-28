import os, sys
import subprocess
from distutils.dir_util import copy_tree
from bs4 import BeautifulSoup

def bfs_dirs(root):
    paths = [root]

    while len(paths) > 0:
        children = []

        for parent in paths:
            if parent.endswith(".gitignore"):
                continue

            for element in os.listdir(parent):
                found_element = os.path.join(parent, element)
                if os.path.isdir(found_element) and "googletagmanager" not in found_element:
                    children.append(found_element)
                elif found_element.endswith("index.html") or found_element.endswith("index.htm"):#The entrance html file to the webpage needs to be called index.html or index.htm otherwise it won't add the JS code to read load times
                    if("index.html" in os.listdir(parent) and not(found_element.endswith("index.html"))):
                       continue
                    else:
                       return found_element
        paths = children

    return root

def add_js(directory, ip):
    for cat in os.listdir(directory):
        if cat == ".DS_Store" or cat == "RUN_WEBAPPS_README.md" or cat == "START_SERVER_IN_THIS_DIR":
            continue

        for site in os.listdir(directory + cat):
            if site == ".DS_Store":
                continue
            
            path_to_html = bfs_dirs('{}{}/{}'.format(directory, cat, site))
            if(path_to_html == '{}{}/{}'.format(directory, cat, site)):
                continue
            path_to_src = os.path.dirname(path_to_html)
            print(path_to_html)
            soup = BeautifulSoup(open(path_to_html, 'rb'), "lxml")
            if(soup.find('head')):
                head_tag = soup.find('head')
                script_tag = head_tag.find_all('script')[0]
                script_tag.decompose()
                #new = soup.new_tag('script')
                #soup.head.insert(1, new)

            with open(path_to_html, "w") as file:
                file.write(str(soup))

if __name__ == '__main__':
   #USAGE: (python3 AddJS.py path/To/Directory/With/All/WebApplication/ IPADRRESS)
   #NOTE: IPADDRESS should be in the form of http://IP:8080/ and IP is the ip address
   add_js(sys.argv[1], sys.argv[2])
