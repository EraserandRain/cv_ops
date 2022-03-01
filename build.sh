#!/bin/bash
export LC_ALL=C
npx parcel build src/index.html
/usr/bin/cp -r dist/* docs/
exit 0