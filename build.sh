#!/bin/bash
export LC_ALL=C
rm -rf dist/*
rm -rf docs/*
npx parcel build src/index.html --no-minify
/usr/bin/cp -r dist/* docs/
css=$(ls -l docs|grep "css$"|awk '{print $NF}')
js=$(ls -l docs|grep "js$"|awk '{print $NF}')
pic=$(ls -l docs|grep "jpg$"|awk '{print $NF}')
sed -i "s|/${css}|./${css}|" ./docs/index.html
sed -i "s|/${js}|./${js}|" ./docs/index.html
sed -i "s|/${pic}|./${pic}|" ./docs/index.html
exit 0