(function () {
    'use strict';
    var root = this;

    var removeContractions = function (arr) {
        var contractions = [
            '\'tis',
            '\'twas',
            'I\'d',
            'I\'ll',
            'I\'m',
            'I\'ve',
            'aren\'t',
            'can\'t',
            'could\'ve',
            'couldn\'t',
            'didn\'t',
            'doesn\'t',
            'don\'t',
            'hadn\'t',
            'hasn\'t',
            'haven\'t',
            'he\'d',
            'he\'ll',
            'he\'s',
            'how\'d',
            'how\'ll',
            'how\'s',
            'isn\'t',
            'it\'d',
            'it\'ll',
            'it\'s',
            'ma\'am',
            'might\'ve',
            'mightn\'t',
            'must\'ve',
            'mustn\'t',
            'o\'clock',
            'she\'d',
            'she\'ll',
            'she\'s',
            'should\'ve',
            'shouldn\'t',
            'that\'d',
            'that\'ll',
            'that\'s',
            'they\'d',
            'they\'ll',
            'they\'re',
            'they\'ve',
            'wasn\'t',
            'we\'d',
            'we\'ll',
            'we\'re',
            'we\'ve',
            'weren\'t',
            'what\'d',
            'what\'ll',
            'what\'re',
            'what\'s',
            'when\'d',
            'when\'ll',
            'when\'s',
            'where\'d',
            'where\'ll',
            'where\'s',
            'who\'d',
            'who\'ll',
            'who\'s',
            'why\'d',
            'why\'ll',
            'why\'s',
            'won\'t',
            'would\'ve',
            'wouldn\'t',
            'you\'d',
            'you\'ll',
            'you\'re',
            'you\'ve'
        ];

        return arr.filter(isNotContraction);

        function isNotContraction(word) {
            return contractions.indexOf(word) === -1;
        }
    };

    // boilerplate: make removeContractions available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = removeContractions;
        }
        exports.removeContractions = removeContractions;
    } else {
        root.removeContractions = removeContractions;
    }
}).call(this);
