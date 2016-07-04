/**
 * Filter from the input values contained in the filter arr
 * @param {array} inputArr - an unfiltered array
 * @param {array} filterArr - an array of values to filter out
 * @return {array}
 */

(function () {
    'use strict';
    var root = this;

    var filterByArr = function (inputArr, filterArr) {
        // return false if input is in the filterArr
        // return true if input is NOT in the filterArr
        var isAllowed = function (input) {
            return filterArr.indexOf(input) === -1;
        };

        return inputArr.filter(isAllowed);
    };

    // boilerplate: make filterByArr available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = filterByArr;
        }
        exports.filterByArr = filterByArr;
    } else {
        root.filterByArr = filterByArr;
    }
}).call(this);
