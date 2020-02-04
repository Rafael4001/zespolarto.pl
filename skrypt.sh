#!/bin/bash
git pull
yarn install
pm2 restart nextjs
