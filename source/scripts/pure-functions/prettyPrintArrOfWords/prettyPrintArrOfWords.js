(function () {
    'use strict';
    var root = this;

    function prettyPrintArrOfWords(arr) {
        var lastIndex;
        var i;
        var returnStr = 'var words = [\n';
        if (arr.length) {
            lastIndex = arr.length - 1;
            for (i = 0; i < lastIndex; i++) {
                returnStr += "    '" + arr[i] + "',\n";
            }
            // no comma after the final word
            returnStr += "    '" + arr[lastIndex] + "'\n";
        }
        returnStr += '];';
        return returnStr;
    }

    // boilerplate: make prettyPrintArrOfWords available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = prettyPrintArrOfWords;
        }
        exports.prettyPrintArrOfWords = prettyPrintArrOfWords;
    } else {
        root.prettyPrintArrOfWords = prettyPrintArrOfWords;
    }
}).call(this);
