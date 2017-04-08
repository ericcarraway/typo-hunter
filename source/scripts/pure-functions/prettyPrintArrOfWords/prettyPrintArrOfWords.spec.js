var prettyPrintArrOfWords = require('./prettyPrintArrOfWords.js');
var expect = require('chai').expect;

describe('prettyPrintArrOfWords', function () {
    var actual;
    var expected;

    describe('smoke tests', function () {
        it('should exist', function () {
            // Expected an assignment or function call and instead saw an expression.
            /* jshint -W030 */
            expect(prettyPrintArrOfWords).to.exist;
        });

        it('should be a function', function () {
            expect(prettyPrintArrOfWords).to.be.a('function');
        });
    });

    describe('tests', function () {
        it('should work', function () {
            actual = prettyPrintArrOfWords(['this', 'is', 'a', 'test']);
            expected = [
                'var words = [',
                "    'this',",
                "    'is',",
                "    'a',",
                "    'test'",
                '];'
            ].join('\n');

            expect(actual).to.eql(expected);
        });

        it('should handle an empty string', function () {
            actual = prettyPrintArrOfWords(['']);
            expected = [
                'var words = [',
                "    ''",
                '];'
            ].join('\n');

            expect(actual).to.eql(expected);
        });
    });
});
