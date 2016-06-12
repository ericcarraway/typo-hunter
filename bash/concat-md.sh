#!/bin/bash

# shell script for copying and concatenating all markdown files

echo "concatenating all markdown files"

# create a directory to store markdown files
mkdir __md-files__

# copy markdown files (including those in subdirectories) to the new folder
find . -name \*.md -exec cp {} __md-files__ \;

# concatenate all of the markdown files into one file
cat __md-files__/*.md > __md-files__/__all__.md
