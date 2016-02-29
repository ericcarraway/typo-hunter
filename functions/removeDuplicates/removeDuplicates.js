var removeDuplicates = function(arrOfStrings) {
    var seen = {};
    return arrOfStrings.filter(function(word) {
        if (seen[word]) {
            return;
        }
        seen[word] = true;
        return word;
    });
};
