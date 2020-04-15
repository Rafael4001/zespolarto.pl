#!/bin/bash
sudo service apache2 stop
npm install
npm run build
pm2 restart next
