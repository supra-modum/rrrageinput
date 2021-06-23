#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP dist/ root@rrrageinput.com:/var/www/rrrageinput.com/
echo "Deployment complete"