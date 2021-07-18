# !/bin/bash

cd ~/simple-portfolio

# pull from the branch
git pull origin master

# start the containers
docker-compose up -d --build
docker-compose -f nginx-proxy-compose.yaml up -d
