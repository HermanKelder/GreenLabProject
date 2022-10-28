mkdir ~/Documents/Prefixer
cd ~/Documents/Prefixer
sudo dnf install npm
npm install postcss postcss-cli autoprefixer
npx postcss **/*.css --use autoprefixer --replace

