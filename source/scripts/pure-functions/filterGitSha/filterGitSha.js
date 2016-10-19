/**
 * Filter Git SHA1 from an array
 *
 * To be removed, an item
 *   - must have either seven or forty characters
 *   - must contain only hex characters 0-9, a-f
 *   - must have at least one digit
 *   - must have at least one letter
 *
 * @param {array} arr
 * @return {array}
 */

(function () {
    'use strict';
    var root = this;

    var filterGitSha = function (arr) {
        return arr.filter(isNotGitSha);

        // return true if the item is a Git SHA
        // isNotGitSha('foo') → true
        // isNotGitSha('23') → true
        // isNotGitSha('08b3763') → false
        function isNotGitSha(item) {
            if (
                item.length === 7 &&          // must be length 7
                /^[a-f0-9]{7}$/.test(item) && // must contain only [a-f0-9]
                /[0-9]/.test(item) &&         // must have at least one digit
                /[a-f]/.test(item)            // must have at least one letter
                ) {
                return false;
            }

            if (
                item.length === 40 &&          // must be length 40
                /^[a-f0-9]{40}$/.test(item) && // must contain only [a-f0-9]
                /[0-9]/.test(item) &&          // must have at least one digit
                /[a-f]/.test(item)             // must have at least one letter
                ) {
                return false;
            }

            return true;
        }
    };

    // boilerplate: make filterGitSha available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = filterGitSha;
        }
        exports.filterGitSha = filterGitSha;
    } else {
        root.filterGitSha = filterGitSha;
    }
}).call(this);
