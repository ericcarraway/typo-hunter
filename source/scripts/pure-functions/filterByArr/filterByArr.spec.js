var filterByArr = require('./filterByArr.js');
var expect = require('chai').expect;

describe('filterByArr', function () {
    var actual;
    var expected;

    it('should be a function', function () {
        expect(filterByArr).to.be.a('function');
    });

    it('should filter (one)', function () {
        actual = filterByArr(['foo', 'bar', 'baz'], ['bar', 'baz']);
        expected = ['foo'];

        expect(actual).to.eql(expected);
    });

    it('should filter (two)', function () {
        actual = filterByArr(['this', 'is', 'an', 'example'], ['this', 'is']);
        expected = ['an', 'example'];

        expect(actual).to.eql(expected);
    });

    it('should handle duplicates', function () {
        var input = ['here', 'are', 'a', 'bunch', 'bunch', 'bunch', 'of', 'words'];
        var blacklist = ['here', 'are', 'words'];

        actual = filterByArr(input, blacklist);
        expected = ['a', 'bunch', 'bunch', 'bunch', 'of'];

        expect(actual).to.eql(expected);
    });

    describe('empty parameters', function () {
        it('should take an empty array as a first param', function () {
            actual = filterByArr([], ['these', 'are', 'the', 'words', 'to', 'remove']);
            expected = [];

            expect(actual).to.eql(expected);
        });

        it('should take an empty array as a second param', function () {
            actual = filterByArr(['input', 'words', 'here'], []);
            expected = ['input', 'words', 'here'];

            expect(actual).to.eql(expected);
        });
    });
});
