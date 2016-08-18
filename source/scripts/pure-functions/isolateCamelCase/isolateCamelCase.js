(function () {
    'use strict';
    var root = this;

    var isolateCamelCase = function (arr) {
        // still needs work - FooBar should NOT pass
        var camelCase = new RegExp(/[a-z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/);

        return arr.filter(isCamelCase);

        function isCamelCase(word) {
            return /[a-z]/.test(word[0]) && camelCase.test(word);
        }
    };

    // boilerplate: make isolateCamelCase available to both Node.js and the browser
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = isolateCamelCase;
        }
        exports.isolateCamelCase = isolateCamelCase;
    } else {
        root.isolateCamelCase = isolateCamelCase;
    }
}).call(this);
