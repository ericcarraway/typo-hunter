/**
 * Filter numbers from an array
 * @param {array} arr
 * @return {array}
 */

(function () {
    'use strict';
    var root = this;

    var filterNumbers = function (arr) {
        return arr.filter(isNotNumeric);

        // return true if the item is not numeric
        // isNotNumeric('foo') → true
        // isNotNumeric('23') → false
        // isNotNumeric(23) → false
        // isNotNumeric('42.1') → true
        // isNotNumeric(42.1) → true
        function isNotNumeric(item) {
            return !/^\d+$/.test(item);
        }
    };

    // boilerplate: make filterNumbers available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = filterNumbers;
        }
        exports.filterNumbers = filterNumbers;
    } else {
        root.filterNumbers = filterNumbers;
    }
}).call(this);
