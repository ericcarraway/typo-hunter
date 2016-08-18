(function () {
    'use strict';
    var root = this;

    var sortByLength = function (arr) {
        return arr.sort(comparatorFn);

        function comparatorFn(a, b) {
          return a.length - b.length || // sort by length, if equal then
                 a.localeCompare(b);    // sort by dictionary order
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
