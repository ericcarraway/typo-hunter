// Eric Carraway
// Saturday, November 7, 2015
//  ~/GitHub/typo-hunter/webdriver-example

// list the unique words on a webpage

var webdriver = require('selenium-webdriver');
var _ = require('lodash');

// var config = require('./config.js');

var config = {
    url: 'http://example.com/'
};

var browser;

console.log('config:', config);

browser = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

browser.get(config.url);

browser.findElements(webdriver.By.css('body'))
    .then(function (elements) {
        console.log('elements found:', elements.length);
        browser.getTitle()
            .then(function (title) {
                var body;
                console.log('page title:', title);
                body = elements[0];
                body.getText()
                    .then(function (text) {
                        var words;
                        // console.log(text);
                        console.log('');
                        console.log('unique words on this page:');
                        words = _.words(text);
                        words = _.uniq(words);
                        words = words.sort();
                        console.log(words);
                        });
                });
        });

browser.quit();

// ➜ node example.js
// config: { url: 'http://example.com/' }
// elements found: 1
// page title: Example Domain
//
// unique words on this page:
// [ 'Domain',
//  'Example',
//  'More',
//  'This',
//  'You',
//  'asking',
//  'be',
//  'coordination',
//  'documents',
//  'domain',
//  'established',
//  'examples',
//  'for',
//  'illustrative',
//  'in',
//  'information',
//  'is',
//  'may',
//  'or',
//  'permission',
//  'prior',
//  'this',
//  'to',
//  'use',
//  'used',
//  'without' ]
