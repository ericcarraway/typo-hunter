// installing a package:
// $ npm install --save-dev gulp-xxxx

// saves to devDependencies in package.json

var requireDir = require('require-dir');

// require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
