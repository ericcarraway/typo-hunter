// WIP - 2017/03/21

/* jshint esversion: 6 */

/* eslint prefer-const: "error" */
/* eslint-env es6 */

const _ = require('lodash');
const expect = require('chai').expect;

function findConsecutiveWords(string) {
    var arrayOfWords = _.words(string, /[^, ]+/g);
    var finalIndex = arrayOfWords.length - 1;

    var i;

    for (i = 0; i < finalIndex; i++) {
        if (arrayOfWords[i] === arrayOfWords[i + 1]) {
            return arrayOfWords[i] + ' ' + arrayOfWords[i + 1];
        }
    }

    return -1;
}

describe('findConsecutiveWords', function () {
    var input;
    var actual;
    var expected;

    describe('smoke tests', function () {
        it('should be a function', function () {
            expect(findConsecutiveWords).to.be.a('function');
        });

        it('should accept an empty string', function () {
            actual = findConsecutiveWords('');
            expected = -1;

            expect(actual).to.eql(expected);
        });

        it('should accept a single word', function () {
            actual = findConsecutiveWords('test');
            expected = -1;

            expect(actual).to.eql(expected);
        });

        it('should accept two words', function () {
            actual = findConsecutiveWords('two words');
            expected = -1;

            expect(actual).to.eql(expected);
        });
    });

    describe('it should find consective words', function () {
        it('beginning', function () {
            input = 'here here we have a test';
            actual = findConsecutiveWords(input);
            expected = 'here here';

            expect(actual).to.eql(expected);
        });

        it('middle', function () {
            input = 'here we have have a test';
            actual = findConsecutiveWords(input);
            expected = 'have have';

            expect(actual).to.eql(expected);
        });

        it('end', function () {
            input = 'here we have a test test';
            actual = findConsecutiveWords(input);
            expected = 'test test';

            expect(actual).to.eql(expected);
        });
    });

    describe('multiple consective words', function () {
        it('1', function () {
            input = 'here here we we have a test';
            actual = findConsecutiveWords(input);
            expected = 'here here';

            expect(actual).to.eql(expected);
        });
    });
});
