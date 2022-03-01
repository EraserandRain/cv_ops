#!/bin/bash
export LC_ALL=C
rm -rf dist/*
rm -rf docs/*
npx parcel build src/index.html
/usr/bin/cp -r dist/* docs/
css=$(ls -l docs|grep "css$"|awk '{print $NF}')
js=$(ls -l docs|grep "js$"|awk '{print $NF}')
sed -i "s|/${css}|/docs/${css}|" ./docs/index.html
sed -i "s|/${js}|/docs/${js}|" ./docs/index.html
exit 0