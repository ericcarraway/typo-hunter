var textUtil = textUtil || {};

textUtil.uniqueWords = function (str) {
    // remove line breaks
    str = str.replace(/(\r\n|\n|\r)/gm, ' ');

    // split words
    var arr = str.split(' ');

    // trim words
    for (var word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    var returnArr = [];

    for (var i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (returnArr.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filterCommonProse = function (str) {
    // remove line breaks
    str = str.replace(/(\r\n|\n|\r)/gm, ' ');

    // split words
    var arr = str.split(' ');

    // trim words
    for (var word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    // bring together word lists
    // currently 4,179 unique words
    var prose = [].concat(
        wordlists.deekayen,
        wordlists.splasho,
        wordlists.aspell
    );

    var returnArr = [];

    for (var i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (prose.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filterTmProse = function (str) {
    // remove line breaks
    str = str.replace(/(\r\n|\n|\r)/gm, ' ');

    // split words
    var arr = str.split(' ');

    // trim words
    for (var word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    var returnArr = [];

    for (var i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (wordlists.motto.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filterAlice = function (str) {
    // remove line breaks
    str = str.replace(/(\r\n|\n|\r)/gm, ' ');

    // split words
    var arr = str.split(' ');

    // trim words
    for (var word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    var returnArr = [];

    for (var i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (wordlists.alice.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};
