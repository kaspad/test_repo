#!/bin/bash
# Script push git repository
git add -A
sleep 1
git commit -m "`date +%d-%m-%Y-%T`"
sleep 1
git push origin esa
