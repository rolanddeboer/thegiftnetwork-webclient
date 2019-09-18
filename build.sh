#!/bin/bash

rm -rf dist/*

ng build --prod

rsync -haze ssh dist/* dhenuh:~/sync-stage --delete

ssh -t dhenuh /var/www/thegiftnetwork.org/www/cl-build.sh

mpg321 finished.mp3 -q
