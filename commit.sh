#!/usr/bin/env sh

# abort on errors
set -e 

# src post
git add -A
git commit -m " $1 $(date +%Y%m%d)"
git push origin master

npm run docs:build

cd docs/.vuepress/dist

rm -rf .git

git init
git add -A
git commit -m "$1 $(date +%Y%m%d)"
git push -f git@github.com:l0vey0u/TIL.git master:gh-pages

cd -