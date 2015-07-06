
CD into the directory of your repo and make a temporary directory to store all markdown files.
```
mkdir _md
```

Copy all markdown files (including those in subdirectories) to the temporary folder you just created.
```
find . -name \*.md -exec cp {} _md \;
```

Navigate to the new folder.
```
cd _md
```

Concatenate all of the markdown files into one file.
```
cat *.md >> _all.md
```

--



--
Here's the same proccess for HTML files:
```
mkdir _html
find . -name \*.html -exec cp {} _html \;
cd _html
cat *.html >> _all.html
```
