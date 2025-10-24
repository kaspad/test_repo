#!/bin/bash
# Script pull git repository
rm package-lock.json
sleep 1
npm install
sleep 1
git add -A
sleep 1
git commit -m "`date +%d-%m-%Y-%T`"
sleep 1
git pull origin esa
