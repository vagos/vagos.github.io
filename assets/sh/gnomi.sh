#!/bin/sh

# check if git is installed
if ! command -v git; then
    echo "please install git first."
    exit 1
fi

[ -d gnomi ] && rm -rf gnomi

git clone --depth 1 https://github.com/vagos/gnomi
cd gnomi || exit 1
chmod +x gnomi.sh
./gnomi.sh
