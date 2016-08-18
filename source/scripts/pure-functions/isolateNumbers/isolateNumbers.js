/**
 * Filter numbers from an array
 * @param {array} arr
 * @return {array}
 */

(function () {
    'use strict';
    var root = this;

    var isolateNumbers = function (arr) {
        return arr.filter(isNumeric);

        // return true if the item is numeric
        // isNumeric('foo') → false
        // isNumeric('23') → true
        // isNumeric(23) → true
        // isNumeric('42.1') → false (for now)
        // isNumeric(42.1) → false (for now)
        function isNumeric(item) {
            return /^\d+$/.test(item);
        }
    };

    // boilerplate: make isolateNumbers available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = isolateNumbers;
        }
        exports.isolateNumbers = isolateNumbers;
    } else {
        root.isolateNumbers = isolateNumbers;
    }
}).call(this);
