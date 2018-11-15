#!/usr/bin/python3
import string

remove_punct_map = dict.fromkeys(map(ord, string.punctuation))
# s.translate(remove_punct_map)

inName = "names.txt"
outName = "output.txt"
fob = open(inName, "r")
inStream = fob.readlines()
inStream = [x.lower()for x in inStream]
inStream = [x.replace(' ', '-') for x in inStream]
inStream = [x.replace(',', '') for x in inStream]
inStream = [x.replace('.', '') for x in inStream]
inStream = [x.replace('*', '') for x in inStream]
inStream = [x.replace('~', '') for x in inStream]
inStream = [x.replace("'", '') for x in inStream]

with open(outName, 'w') as f:
    for item in inStream:
        f.write("%s" % item)
# inStream = [s.translate(remove_punct_map) for s in inStream]

# inStream = [x.replace("!@#$%^&*()[]{};:,./<>?|`~-=_+", '') for x in inStream]
fob.close()
print(inStream)
