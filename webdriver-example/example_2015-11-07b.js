// list the unique words on a webpage

// text manipulation
var _ = require('lodash');
var uniqueWords = function (text) {
    return _.chain(text).words().uniq().sort().join('\n').value();
};

var config = require('./config.js');

var webdriver;
var browser;

console.log('config:', config);

webdriver = require('selenium-webdriver');
browser = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

browser.get(config.url);

browser.findElements(webdriver.By.css('body'))
    .then(function (elements) { return elements[0].getText(); })
    .then(function (text) { console.log(uniqueWords(text)); });

browser.quit();
