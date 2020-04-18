#!/usr/bin/env bash
sudo rm -rf ~/app-temp
mkdir ~/app-temp
cp -r ./ ~/app-temp
cd ~/app
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down
sudo rm -rf ~/app
mv ~/app-temp ~/app
cd ~/app
docker volume prune -f
touch ~/arto-acme.json
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --remove-orphans
