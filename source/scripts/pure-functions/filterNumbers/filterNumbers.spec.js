var filterNumbers = require('./filterNumbers.js');
var expect = require('chai').expect;

describe('filterNumbers', function () {
    var actual;
    var expected;

    it('should exist', function () {
        /* jshint -W030 */
        expect(filterNumbers).to.exist;
    });

    it('should be a function', function () {
        expect(filterNumbers).to.be.a('function');
    });

    it('should filter numbers', function () {
        actual = filterNumbers(['one', '1', 2, 'two', 'foo', '23', '48', 48]);
        expected = ['one', 'two', 'foo'];

        expect(actual).to.eql(expected);
    });

    it("['23', '42'] → [ ]", function () {
        actual = filterNumbers(['23', '42']);
        expected = [];

        expect(actual).to.eql(expected);
    });

    it('[23, 42] → [ ]', function () {
        actual = filterNumbers([23, 42]);
        expected = [];

        expect(actual).to.eql(expected);
    });

    it('[4, 8, 15, 16, 23, 42] → [ ]', function () {
        actual = filterNumbers([4, 8, 15, 16, 23, 42]);
        expected = [];

        expect(actual).to.eql(expected);
    });

    it("[23, 'bar'] → ['bar']", function () {
        actual = filterNumbers([23, 'bar']);
        expected = ['bar'];

        expect(actual).to.eql(expected);
    });

    it("['foo'] → ['foo']", function () {
        actual = filterNumbers(['foo']);
        expected = ['foo'];

        expect(actual).to.eql(expected);
    });

    it("['42.1'] → ['42.1']", function () {
        actual = filterNumbers(['42.1']);
        expected = ['42.1'];

        expect(actual).to.eql(expected);
    });

    it('[42.1] → [42.1]', function () {
        actual = filterNumbers([42.1]);
        expected = [42.1];

        expect(actual).to.eql(expected);
    });

    it('large dataset', function () {
        actual = filterNumbers([
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
            'Lorem',
            'ipsum',
            'dolor',
            'sit',
            'amet',
            'consectetur',
            'adipiscing',
            'elit'
        ];

        expect(actual).to.eql(expected);
    });
});
