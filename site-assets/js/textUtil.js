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

textUtil.filter_2016_04_07 = function (str) {
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
        if (wordlists._2016_04_07.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filter_2016_04_25 = function (str) {
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
        if (wordlists._2016_04_25.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

// 2016-02-29
// experimenting with punctuation removal via regex
textUtil.removePunctuation = function (str) {
    var regexes = [
        '!', // exclamationPoint
        '"', // doubleQuote
        '#', // numberSign
        '\\$', // dollarSign
        '%', // percentSign
        '&', // ampersand
        '\'', // singleQuote
        '\\(', // openParentheses
        '\\)', // closeParentheses
        '\\*', // asterisk
        '\\+', // plusSign
        ',', // comma
        '-', // hyphen
        '\\.', // period
        '/', // forwardSlash
        ':', // colon
        ';', // semicolon
        '<', // lessThan
        '=', // equalsSign
        '>', // greaterThan
        '\\?', // questionMark
        '@', // atSign
        '\\[', // openSquareBracket
        '\\\\', // backslash
        ']', // closeSquareBracket
        '\\^', // caret
        '_', // underscore
        '`', // backtick
        '{', // openCurlyBrace
        '\\|', // pipe
        '}', // closeCurlyBrace
        '~', // tilde
    ];
    regexes = regexes.join('|');
    var regExp = new RegExp(regexes, 'g');
    return str.replace(regExp, ' ');
};

textUtil.newlineToSpace = function (str) {
    return str.replace(/\n/g, " ");
};
