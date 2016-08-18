var textUtil = textUtil || {};

textUtil.trim = function (str) {
    var arrayOfLines = str.match(/[^\r\n]+/g);
    arrayOfLines = arrayOfLines.map(function (line) { return line.trim(); });
    return arrayOfLines.join('\n');
};

textUtil.filterEmptyLines = function (str) {
    var arrayOfLines = str.match(/[^\r\n]+/g);
    arrayOfLines.filter(function (line) { return line.trim() !== ''; });
    return arrayOfLines.join('\n');
};

textUtil.uniqueWords = function (str) {
    var limit;
    var i;
    var returnArr = [];

    var arrOfWords = stringToArrayOfWords(str);

    limit = arrOfWords.length;
    for (i = 0; i < limit; i++) {
        // if the word in question does not already exist in the return array
        if (returnArr.indexOf(arrOfWords[i]) === - 1) {
            // then add it to the return array
            returnArr.push(arrOfWords[i]);
        }
    }

    // return with line breaks between the words
    return returnArr.sort().join('\n');
};

textUtil.filterCommonProse = function (str) {
    var arrOfWords = stringToArrayOfWords(str);

    // bring together word lists
    // currently 4,179 unique words
    var prose = [].concat(
        wordlists.deekayen,
        wordlists.splasho,
        wordlists.aspell
    );

    return filterByArr(arrOfWords, prose).sort().join('\n');
};

textUtil.filterTmProse = function (str) {
    var arr;
    var word;
    var returnArr = [];

    // remove line breaks
    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

    // split words
    arr = str.split(' ');

    // trim words
    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    returnArr = filterByArr(arr, wordlists.motto);

    return returnArr.sort().join('\n');
};

textUtil.filterAlice = function (str) {
    var arr;
    var word;
    var returnArr = [];

    // remove line breaks
    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

    // split words
    arr = str.split(' ');

    // trim words
    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    returnArr = filterByArr(arr, wordlists.alice);

    return returnArr.sort().join('\n');
};

textUtil.filter_2016_04_07 = function (str) {
    var arr;
    var word;
    var returnArr = [];

    // remove line breaks
    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

    // split words
    arr = str.split(' ');

    // trim words
    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    returnArr = filterByArr(arr, wordlists._2016_04_07);

    return returnArr.sort().join('\n');
};

textUtil.filter_2016_04_25 = function (str) {
    var arr;
    var word;
    var returnArr = [];

    // remove line breaks
    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

    // split words
    arr = str.split(' ');

    // trim words
    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    returnArr = filterByArr(arr, wordlists._2016_04_25);

    return returnArr.sort().join('\n');
};

textUtil.filter_2016_05_14 = function (str) {
    var arr;
    var word;
    var returnArr = [];

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    returnArr = filterByArr(arr, wordlists._2016_05_14);

    return returnArr.sort().join('\n');
};

textUtil.filterPapa = function (str) {
    var arr;
    var word;
    var returnArr = [];

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    returnArr = filterByArr(arr, wordlists.papa);

    return returnArr.sort().join('\n');
};

textUtil.filterAirbnb = function (str) {
    var arr;
    var word;
    var returnArr = [];

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    returnArr = filterByArr(arr, wordlists.airbnb);

    return returnArr.sort().join('\n');
};

textUtil.filterAngular1 = function (str) {
    var arr;
    var word;
    var returnArr = [];

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    returnArr = filterByArr(arr, wordlists.angular_1);

    return returnArr.sort().join('\n');
};

textUtil.filterRxPageObjects = function (str) {
    var arr;
    var word;
    var returnArr = [];

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    returnArr = filterByArr(arr, wordlists.rxPageObjects);

    return returnArr.sort().join('\n');
};

textUtil.filterGitHub = function (str) {
    var arr;
    var returnArr = [];

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    returnArr = filterByArr(arr, wordlists.github);

    return returnArr.sort().join('\n');
};

textUtil.filterNumbers = function (str) {
    var arr;

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    return filterNumbers(arr).join('\n');
};

textUtil.removePunctuation = function (str) {
    return removePunctuation(str);
};

textUtil.newlineToSpace = function (str) {
    return str.replace(/\n/g, ' ');
};
