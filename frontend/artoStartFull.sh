#!/bin/bash
sudo service apache2 stop
git pull origin master
npm install
npm run build
pm2 restart arto
