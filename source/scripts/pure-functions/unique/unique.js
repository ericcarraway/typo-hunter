(function () {
    'use strict';
    var root = this;

    var unique = function (arr) {
        return arr.reduce(function (accum, current) {
            if (accum.indexOf(current) < 0) {
                accum.push(current);
            }
            return accum;
        }, []);
    };

    // boilerplate: make unique available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = unique;
        }
        exports.unique = unique;
    } else {
        root.unique = unique;
    }
}).call(this);
