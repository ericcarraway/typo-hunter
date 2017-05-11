(function () {
    'use strict';
    var root = this;

    var removePunctuation = function (str) {
        return str.replace(/[^A-Za-z0-9\s]/g, ' ')
                  .replace(/[\t\n\f]/g, ' '); // tab, newline, form feed
    };

    // boilerplate: make removePunctuation available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = removePunctuation;
        }
        exports.removePunctuation = removePunctuation;
    } else {
        root.removePunctuation = removePunctuation;
    }
}).call(this);
