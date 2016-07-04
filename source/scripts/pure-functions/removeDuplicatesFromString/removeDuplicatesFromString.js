(function () {
    'use strict';
    var root = this;

    var removeDuplicatesFromString = function (str) {
        var arrOfWords;
        var limit;
        var i;
        var returnArr = [];

        // strip whitespace
        // space, carriage return (\r), tab (\t), new line (\n)
        // whitespace special character \s will match any whitespace
        str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

        // split words
        arrOfWords = str.split(' ');

        limit = arrOfWords.length;
        for (i = 0; i < limit; i++) {
            // if this is the empty string, skip over this iteration of the loop
            if (arrOfWords[i] === '') {
                continue;
            }
            // if the word in question does not already exist in the return array
            if (returnArr.indexOf(arrOfWords[i]) === - 1) {
                // then add it to the return array
                returnArr.push(arrOfWords[i]);
            }
        }

        // return with spaces between the words
        return returnArr.sort().join(' ');

        // return with line breaks between the words
        // return returnArr.sort().join('\n');
    };

    // boilerplate: make removeDuplicatesFromString available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = removeDuplicatesFromString;
        }
        exports.removeDuplicatesFromString = removeDuplicatesFromString;
    } else {
        root.removeDuplicatesFromString = removeDuplicatesFromString;
    }
}).call(this);
