var isolateFourCharWords = require('./isolateFourCharWords.js');
var expect = require('chai').expect;

describe('isolateFourCharWords', function () {
    var actual;
    var expected;

    it('should exist', function () {
        /* jshint -W030 */
        expect(isolateFourCharWords).to.exist;
    });

    it('should be a function', function () {
        expect(isolateFourCharWords).to.be.a('function');
    });

    it('should isolate four-charachter words', function () {
        actual = isolateFourCharWords([
            'test',
            'is',
            'this',
            'a',
            'four',
            'letter',
            'word'
        ]);
        expected = [
            'test',
            'this',
            'four',
            'word'
        ];

        expect(actual).to.eql(expected);
    });
});
