#!/bin/bash
sudo service apache2 stop
git pull
npm install
npm run build
pm2 restart next
