#!/bin/sh

set -e

openssl aes-256-cbc -K $encrypted_608b2219b20c_key -iv $encrypted_608b2219b20c_iv -in deploy_key.enc -out deploy_key -d
chmod 600 deploy_key

eval `ssh-agent -s`
ssh-add deploy_key

git config user.name "Travis CI"
git config user.email "travis@travis-ci.org"
yarn run deploy
