(function () {
    'use strict';
    var root = this;

    var stringToArrayOfWords = function (str) {
        // strip whitespace
        // space, carriage return (\r), tab (\t), new line (\n)
        // whitespace special character \s will match any whitespace
        // filter(Boolean) removes empty strings
        return str.replace(/(\s|\r\n|\n|\r)/gm, ' ').split(' ').filter(Boolean);
    };

    // boilerplate: make stringToArrayOfWords available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = stringToArrayOfWords;
        }
        exports.stringToArrayOfWords = stringToArrayOfWords;
    } else {
        root.stringToArrayOfWords = stringToArrayOfWords;
    }
}).call(this);
