var textUtil = textUtil || {};

textUtil.uniqueWords = function (str) {
    var arrOfWords;
    var limit;
    var i;
    var returnArr = [];

    // strip whitespace
    // space, carriage return (\r), tab (\t), new line (\n)
    // whitespace special character \s will match any whitespace
    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

    // split words
    arrOfWords = str.split(' ');

    limit = arrOfWords.length;
    for (i = 0; i < limit; i++) {
        // if this is the empty string, skip over this iteration of the loop
        if (arrOfWords[i] === '') {
            continue;
        }
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
    var arr;
    var word;
    var prose;
    var returnArr = [];
    var i;

    // remove line breaks
    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

    // split words
    arr = str.split(' ');

    // trim words
    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    // bring together word lists
    // currently 4,179 unique words
    prose = [].concat(
        wordlists.deekayen,
        wordlists.splasho,
        wordlists.aspell
    );

    for (i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (prose.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filterTmProse = function (str) {
    var arr;
    var word;
    var i;
    var returnArr = [];

    // remove line breaks
    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

    // split words
    arr = str.split(' ');

    // trim words
    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    for (i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (wordlists.motto.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filterAlice = function (str) {
    var arr;
    var word;
    var returnArr = [];
    var i;

    // remove line breaks
    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

    // split words
    arr = str.split(' ');

    // trim words
    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    returnArr = [];

    for (i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (wordlists.alice.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filter_2016_04_07 = function (str) {
    var arr;
    var word;
    var i;
    var returnArr = [];

    // remove line breaks
    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

    // split words
    arr = str.split(' ');

    // trim words
    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    for (i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (wordlists._2016_04_07.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filter_2016_04_25 = function (str) {
    var arr;
    var word;
    var i;
    var returnArr = [];

    // remove line breaks
    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');

    // split words
    arr = str.split(' ');

    // trim words
    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    for (i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (wordlists._2016_04_25.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filter_2016_05_14 = function (str) {
    var arr;
    var word;
    var i;
    var returnArr = [];

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }
    for (i = 0; i < arr.length; i++) {
        if (wordlists._2016_05_14.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }
    return returnArr.sort().join('\n');
};

textUtil.filterPapa = function (str) {
    var arr;
    var word;
    var i;
    var returnArr = [];

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }
    for (i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (wordlists.papa.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filterAirbnb = function (str) {
    var arr;
    var word;
    var i;
    var returnArr = [];

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }
    for (i = 0; i < arr.length; i++) {
        if (wordlists.airbnb.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }
    return returnArr.sort().join('\n');
};

textUtil.filterAngular1 = function (str) {
    var arr;
    var word;
    var i;
    var returnArr = [];

    str = str.replace(/(\s|\r\n|\n|\r)/gm, ' ');
    arr = str.split(' ');

    for (word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }
    for (i = 0; i < arr.length; i++) {
        if (wordlists.angular_1.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }
    return returnArr.sort().join('\n');
};

// 2016-02-29
// experimenting with punctuation removal via regex
textUtil.removePunctuation = function (str) {
    var regExp;
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
        '~' // tilde
    ];
    regexes = regexes.join('|');
    regExp = new RegExp(regexes, 'g');
    return str.replace(regExp, ' ');
};

textUtil.newlineToSpace = function (str) {
    return str.replace(/\n/g, ' ');
};

//  tab character: '	'
//  arrow: '→'
//  checkMark: '✓'
