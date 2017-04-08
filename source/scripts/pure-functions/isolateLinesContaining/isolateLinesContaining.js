/**
 * used for the button
 * "isolate lines with '@'"
 *
 * @param {array} arr
 * @param {string} str
 *
 * @return {array}
 */

(function () {
    'use strict';
    var root = this;

    var isolateLinesContaining = function (arr, str) {
        return arr.filter(includesStr);

        // return true if the item has the thing
        function includesStr(item) {
            return item.includes(str);
        }
    };

    // boilerplate: make isolateLinesContaining available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = isolateLinesContaining;
        }
        exports.isolateLinesContaining = isolateLinesContaining;
    } else {
        root.isolateLinesContaining = isolateLinesContaining;
    }
}).call(this);
