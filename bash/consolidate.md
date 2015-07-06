
CD into the directory of your repo
make a temporary directory to store all markdown files
```
mkdir _md
```

copy all markdown files (including those in subdirectories) to the temporary folder you just created
```
find . -name \*.md -exec cp {} _md \;
```

navigate to the folder
```
cd _md
```

concatenate all of the markdown files into one file
```
cat *.md >> _all.md
```

to be continued



--
the same proccess for HTML files:
```
mkdir _html
find . -name \*.html -exec cp {} _html \;
cd _html
cat *.html >> _all.html
```
