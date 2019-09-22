#!/bin/bash

HOSTNAME="dhenuh"
read -p "[sudo] password on $HOSTNAME: " PASSWORD

rm -rf dist/*

ng build --prod

rsync -haze ssh dist/* "$HOSTNAME":~/sync-stage --delete

ssh -t "$HOSTNAME" "/var/www/thegiftnetwork.org/www/cl-build.sh $PASSWORD"

mpg321 finished.mp3 -q
