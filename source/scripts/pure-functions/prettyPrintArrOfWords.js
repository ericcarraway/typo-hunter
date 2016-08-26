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
