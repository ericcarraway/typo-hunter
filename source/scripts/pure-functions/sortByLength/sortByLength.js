(function () {
    'use strict';
    var root = this;

    var sortByLength = function (arr) {
        return arr.sort(comparatorFn);

        function comparatorFn(a, b) {
            // sort by length
            // if equal then sort by dictionary order
            return (a.length - b.length) || a.localeCompare(b);
        }
    };

    // boilerplate: make sortByLength available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = sortByLength;
        }
        exports.sortByLength = sortByLength;
    } else {
        root.sortByLength = sortByLength;
    }
}).call(this);
