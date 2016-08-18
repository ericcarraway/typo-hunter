(function () {
    'use strict';
    var root = this;

    var isolatePascalCase = function (arr) {
        // still needs work - fooBar should NOT pass
        var pascalCase = new RegExp(/[A-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/);

        return arr.filter(isPascalCase);

        function isPascalCase(word) {
            return /[A-Z]/.test(word[0]) && pascalCase.test(word);
        }
    };

    // boilerplate: make isolatePascalCase available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = isolatePascalCase;
        }
        exports.isolatePascalCase = isolatePascalCase;
    } else {
        root.isolatePascalCase = isolatePascalCase;
    }
}).call(this);
