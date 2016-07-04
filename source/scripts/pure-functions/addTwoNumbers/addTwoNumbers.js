// 2016-07-04 this file is provided as an example of modularity and testing
(function () {
    'use strict';
    var root = this;

    var addTwoNumbers = function (a, b) {
        return a + b;
    };

    // make addTwoNumbers available to both Node.js and the browser
    // this is what underscore.js does

    // check for the existence of 'module.exports'
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            // if in a Node.js context, export the normal way
            exports = module.exports = addTwoNumbers;
        }
        exports.addTwoNumbers = addTwoNumbers;
    } else {
        // if in a browser context, set addTwoNumbers as a property
        // on the window object
        root.addTwoNumbers = addTwoNumbers;
    }
}).call(this); // in the browser, 'this' is the window object

// http://www.richardrodger.com/
// 2013/09/27/how-to-make-simple-node-js-modules-work-in-the-browser/

// http://stackoverflow.com/questions/12571737/module-exports-client-side
