(function () {
    'use strict';
    var root = this;

    var removePunctuation = function (str) {
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
            '—', // emdash?
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
            '\t', // tab character
            '→', // arrow
            '✓', // checkMark
            '✔', // Mocha pass
            '✖', // Mocha fail
            '©', // copyright
            '·', // dot
            '“', // smart double quote left
            '”', // smart double quote right 1
            '″', // smart double quote right 2
            '’', // smart single quote right
            '¡',
            '¢',
            '£',
            '¤',
            '¥',
            '¦',
            '§',
            '¨',
            'ª',
            '«',
            '¬',
            '®',
            '¯',
            '°',
            '±',
            '²',
            '³',
            '´',
            'µ',
            '¶',
            '¸',
            '¹',
            'º',
            '»',
            '¼',
            '½',
            '¾',
            '¿',
            '‘',
            '‚',
            '„',
            '†',
            '‡',
            '•',
            '…',
            '‰',
            '€',
            '™',
            '➜',
            '👍'
        ];
        regexes = regexes.join('|');
        regExp = new RegExp(regexes, 'g');
        return str.replace(regExp, ' ');
    };

    // boilerplate: make removePunctuation available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = removePunctuation;
        }
        exports.removePunctuation = removePunctuation;
    } else {
        root.removePunctuation = removePunctuation;
    }
}).call(this);
