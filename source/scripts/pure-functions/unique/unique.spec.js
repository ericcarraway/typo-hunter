var unique = require('./unique.js');
var expect = require('chai').expect;

describe('unique', function () {
    var input;
    var actual;
    var expected;

    it('should be a function', function () {
        expect(unique).to.be.a('function');
    });

    it('should remove consective duplicates', function () {
        input = ['foo', 'foo', 'bar', 'bar', 'baz', 'baz', 'baz'];
        actual = unique(input);
        expected = ['foo', 'bar', 'baz'];

        expect(actual).to.eql(expected);
    });

    it('should remove duplicates in scattered order', function () {
        input = ['foo', 'bar', 'foo', 'baz', 'baz', 'bar', 'baz', 'foo'];
        actual = unique(input);
        expected = ['foo', 'bar', 'baz'];

        expect(actual).to.eql(expected);
    });
});
