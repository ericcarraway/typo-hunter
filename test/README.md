# Testing

## Setup

#### Step 1: Installing Dependencies

* `cd` to `typo-hunter/test`

* Install dependencies listed in `bower.json`
```
$ bower install
```

`typo-hunter/test/bower_components` should now contain
* Chai http://chaijs.com/
* Mocha https://mochajs.org/


#### Step 2: Running Tests

To run tests in the browser using `typo-hunter/test/index.html`
* `cd` to `typo-hunter/test` and serve the directory
```
$ live-server
```

This command runs a simple development http server with live reload capability
https://www.npmjs.com/package/live-server

* Open a browser to http://127.0.0.1:8080/

---
### Changelog

2016-05-18
* minimum viable testing setup using mocha + chai

2016-02-28
* initial qUnit experiment in commit 8954d78
