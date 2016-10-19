/**
 * Remove leading plus sign from a string
 * Useful for copy-pasting from GitHub pull requests
 *
 * removeLeadingPlusSign('+example')
 * 'example'
 *
 * @param {string} str
 * @return {string}
 */

(function () {
    'use strict';
    var root = this;

    var removeLeadingPlusSign = function (str) {
        if (str.length > 0 && str[0] === '+') {
            return str.substring(1);
        }
        return str;
    };

    // boilerplate: make removeLeadingPlusSign available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = removeLeadingPlusSign;
        }
        exports.removeLeadingPlusSign = removeLeadingPlusSign;
    } else {
        root.removeLeadingPlusSign = removeLeadingPlusSign;
    }
}).call(this);
