#!/bin/bash
git pull
yarn install
yarn build
pm2 restart nextjs