#!/bin/bash
export LC_ALL=C
rm -rf dist/*
rm -rf docs/*
npx parcel build src/index.html --no-minify
/usr/bin/cp -r dist/* docs/
# pic
pic=$(ls -l docs|grep "jpg$"|awk '{print $NF}')
sed -i "s|/${pic}|./${pic}|" docs/index.html
# css
css_sum=$(ls -l docs|grep "css$"|awk '{print $NF}'|wc -l)
for (( i=0;i<"$css_sum";i++ ))
do
    css_arr[$i]=$(ls -l docs|grep "css$"|awk "NR==$[$i+1]"|awk '{print $NF}')
    # echo ${css_arr[$i]}
    sed -i "s|/${css_arr[$i]}|./${css_arr[$i]}|g" docs/index.html
done
#js
js=$(ls -l docs|grep "js$"|awk '{print $NF}')
sed -i "s|/${js}|./${js}|" docs/index.html

touch docs/.nojekyll
exit 0