/* jshint expr: true */

var stringToArrayOfWords = require('./stringToArrayOfWords.js');
var expect = require('chai').expect;

describe('stringToArrayOfWords', function () {
    var input;
    var actual;
    var expected;

    it('should exist', function () {
        expect(stringToArrayOfWords).to.exist;
    });

    it('should be a function', function () {
        expect(stringToArrayOfWords).to.be.a('function');
    });

    it('should return an array', function () {
        input = 'this is a test';
        expect(stringToArrayOfWords(input)).to.be.an('array');
    });

    it('initial test', function () {
        input = 'the quick brown fox jumps over the lazy dog';
        actual = stringToArrayOfWords(input);
        expected = [
            'the',
            'quick',
            'brown',
            'fox',
            'jumps',
            'over',
            'the',
            'lazy',
            'dog'
        ];

        expect(actual).to.eql(expected);
    });

    it('should handle multiple consecutive spaces', function () {
        input = 'the  quick   brown     fox       jumps     over    the   lazy  dog';
        actual = stringToArrayOfWords(input);
        expected = [
            'the',
            'quick',
            'brown',
            'fox',
            'jumps',
            'over',
            'the',
            'lazy',
            'dog'
        ];

        expect(actual).to.eql(expected);
    });

    it('should handle "falsy" words', function () {
        input = 'null undefined empty false 0';
        actual = stringToArrayOfWords(input);
        expected = [
            'null',
            'undefined',
            'empty',
            'false',
            '0'
        ];

        expect(actual).to.eql(expected);
    });

    it('should handle numbers', function () {
        input = '4 8 15 16 23 42';
        actual = stringToArrayOfWords(input);
        expected = [
            '4',
            '8',
            '15',
            '16',
            '23',
            '42'
        ];

        expect(actual).to.eql(expected);
    });

    it('should not remove duplicates', function () {
        input = 'this this is is is an example example example example';
        actual = stringToArrayOfWords(input);
        expected = [
            'this',
            'this',
            'is',
            'is',
            'is',
            'an',
            'example',
            'example',
            'example',
            'example'
        ];

        expect(actual).to.eql(expected);
    });

    it('should handle tabs', function () {
        input = 'the it    should\thandle \ttabs\t \t\ttest';
        actual = stringToArrayOfWords(input);
        expected = [
            'the',
            'it',
            'should',
            'handle',
            'tabs',
            'test'
        ];

        expect(actual).to.eql(expected);
    });
});
