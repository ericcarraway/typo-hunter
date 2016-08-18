var sortByLength = require('./sortByLength.js');
var expect = require('chai').expect;

describe('sortByLength', function () {
    var input;
    var actual;
    var expected;

    it('should be a function', function () {
        expect(sortByLength).to.be.a('function');
    });

    it('1', function () {
        input = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
        actual = sortByLength(input);
        expected = [
            'dog',
            'fox',
            'the',
            'the',
            'lazy',
            'over',
            'brown',
            'jumps',
            'quick'
        ];

        expect(actual).to.eql(expected);
    });

    it('2', function () {
        input = [
            'fourscore', 'and', 'seven', 'years', 'ago', 'our', 'fathers', 'brought', 'forth', 'on',
            'this', 'continent', 'a', 'new', 'nation', 'conceived', 'in', 'liberty', 'and',
            'dedicated', 'to', 'the', 'proposition', 'that', 'all', 'men', 'are', 'created', 'equal'
        ];
        actual = sortByLength(input);
        expected = [
            'a',
            'in',
            'on',
            'to',
            'ago',
            'all',
            'and',
            'and',
            'are',
            'men',
            'new',
            'our',
            'the',
            'that',
            'this',
            'equal',
            'forth',
            'seven',
            'years',
            'nation',
            'brought',
            'created',
            'fathers',
            'liberty',
            'conceived',
            'continent',
            'dedicated',
            'fourscore',
            'proposition'
        ];

        expect(actual).to.eql(expected);
    });
});
