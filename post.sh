#!/usr/bin/env sh

# abort on errors
set -e 

# src post
git add -A
git commit -m "$(date +%Y%m%d) post"
git push origin master

npm run docs:build

cd docs/.vuepress/dist
echo 'til.syru.dev' > CNAME
rm -rf .git

git init
git add -A
git commit -m "$(date +%Y%m%d) post"
git push -f git@til.github.com:l0vey0u/TIL.git master:gh-pages

cd -