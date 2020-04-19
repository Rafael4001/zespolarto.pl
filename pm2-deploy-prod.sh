#!/usr/bin/env bash
cp my-app.conf /etc/nginx/conf.d
sudo nginx -t
sudo service nginx restart
git pull origin master
pm2 remove 1
pm2 remove 2
pm2 start npm --name "be" -- run start
pm2 start npm --name "fe" -- run start