mkdir ~/Documents/Stripper
cd ~/Documents/Stripper
sudo dnf install npm
npm i -g postcss-remove-prefixes
find . -name "*.css" | sort | xargs remove-prefixes
