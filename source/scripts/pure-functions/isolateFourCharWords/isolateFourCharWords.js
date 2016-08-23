(function () {
    'use strict';
    var root = this;

    var isolateFourCharWords = function (arr) {
        return arr.filter(isLengthFour);

        function isLengthFour(word) {
            return word.length === 4;
        }
    };

    // boilerplate: make isolateFourCharWords available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = isolateFourCharWords;
        }
        exports.isolateFourCharWords = isolateFourCharWords;
    } else {
        root.isolateFourCharWords = isolateFourCharWords;
    }
}).call(this);
