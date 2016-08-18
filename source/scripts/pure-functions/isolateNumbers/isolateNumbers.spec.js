var isolateNumbers = require('./isolateNumbers.js');
var expect = require('chai').expect;

describe('isolateNumbers', function () {
    var actual;
    var expected;

    it('should exist', function () {
        /* jshint -W030 */
        expect(isolateNumbers).to.exist;
    });

    it('should be a function', function () {
        expect(isolateNumbers).to.be.a('function');
    });

    it('should isolate numbers', function () {
        actual = isolateNumbers(['one', '1', 2, 'two', 'foo', '23', '48', 48]);
        expected = ['1', 2, '23', '48', 48];

        expect(actual).to.eql(expected);
    });

    it("['23', '42', 'control'] → ['23', '42']", function () {
        actual = isolateNumbers(['23', '42', 'control']);
        expected = ['23', '42'];

        expect(actual).to.eql(expected);
    });

    it("[23, 42, 'control'] → [23, 42]", function () {
        actual = isolateNumbers([23, 42, 'control']);
        expected = [23, 42];

        expect(actual).to.eql(expected);
    });

    it("[4, 8, 15, 16, 23, 42, 'control'] → [4, 8, 15, 16, 23, 42]", function () {
        actual = isolateNumbers([4, 8, 15, 16, 23, 42, 'control']);
        expected = [4, 8, 15, 16, 23, 42];

        expect(actual).to.eql(expected);
    });

    it("[23, 'bar'] → [23]", function () {
        actual = isolateNumbers([23, 'bar']);
        expected = [23];

        expect(actual).to.eql(expected);
    });

    it.skip('should handle negative numbers', function () {
        actual = isolateNumbers([-23, 'bar']);
        expected = [-23];

        expect(actual).to.eql(expected);
    });

    it("['foo'] → []", function () {
        actual = isolateNumbers(['foo']);
        expected = [];

        expect(actual).to.eql(expected);
    });

    it.skip('should handle decimals', function () {
    });

    it("['42.1', 'control'] → []", function () {
        actual = isolateNumbers(['42.1', 'control']);
        expected = [];

        expect(actual).to.eql(expected);
    });

    it("[42.1, 'control'] → []", function () {
        actual = isolateNumbers([42.1, 'control']);
        expected = [];

        expect(actual).to.eql(expected);
    });

    it('large dataset', function () {
        actual = isolateNumbers([
            0,
            '0',
            'Lorem',
            4,
            '4',
            'ipsum',
            8,
            '8',
            'dolor',
            15,
            '15',
            'sit',
            16,
            '16',
            'amet',
            23,
            '23',
            'consectetur',
            42,
            '42',
            'adipiscing',
            'elit'
        ]);
        expected = [
            0,
            '0',
            4,
            '4',
            8,
            '8',
            15,
            '15',
            16,
            '16',
            23,
            '23',
            42,
            '42'
        ];

        expect(actual).to.eql(expected);
    });
});
