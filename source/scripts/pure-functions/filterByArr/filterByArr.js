/**
 * Filter from the input values contained in the filter arr
 * @param {array} inputArr - an unfiltered array
 * @param {array} filterArr - an array of values to filter out
 * @return {array}
 */

filterByArr = function (inputArr, filterArr) {
    // return false if input is filterArr
    // return true if input is NOT in filterArr
    var isAllowed = function (input) {
        return filterArr.indexOf(input) === -1;
    };

    return inputArr.filter(isAllowed);
};
