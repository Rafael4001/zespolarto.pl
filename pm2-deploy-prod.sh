#!/usr/bin/env bash
cp my-app.conf /etc/nginx/conf.d
sudo nginx -t
sudo service nginx restart
git pull origin master
pm2 delete "be"
pm2 delete "fe"
cd backend
pm2 start npm --name "be" -- run startProd
cd ..
cd frontend
pm2 start npm --name "fe" -- run startProd
cd ..