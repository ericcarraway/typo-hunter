var removeDuplicatesFromString = require('./removeDuplicatesFromString.js');
var expect = require('chai').expect;

describe('removeDuplicatesFromString', function () {
    var input;
    var actual;
    var expected;

    it('should be a function', function () {
        expect(removeDuplicatesFromString).to.be.a('function');
    });

    it('should remove duplicates', function () {
        input = 'foo foo bar bar baz baz baz';
        actual = removeDuplicatesFromString(input);
        expected = 'bar baz foo';

        expect(actual).to.eql(expected);
    });

    it('should handle leading spaces', function () {
        input = '      foo foo bar bar baz baz baz';
        actual = removeDuplicatesFromString(input);
        expected = 'bar baz foo';

        expect(actual).to.eql(expected);
    });

    it('should handle extra spaces', function () {
        input = ' foo   foo  bar  bar baz baz        baz ';
        actual = removeDuplicatesFromString(input);
        expected = 'bar baz foo';

        expect(actual).to.eql(expected);
    });

    it('should handle line breaks', function () {
        input = 'foo \n foo \n bar \n bar baz baz \n baz\n';
        actual = removeDuplicatesFromString(input);
        expected = 'bar baz foo';

        expect(actual).to.eql(expected);
    });

    it('should handle tabs', function () {
        input = 'foo\tfoo    bar\tbar\tbaz    baz\tbaz';
        actual = removeDuplicatesFromString(input);
        expected = 'bar baz foo';

        expect(actual).to.eql(expected);
    });

    it('should handle carriage returns', function () {
        input = 'foo\rfoo    bar\rbar\rbaz    baz\rbaz';
        actual = removeDuplicatesFromString(input);
        expected = 'bar baz foo';

        expect(actual).to.eql(expected);
    });
});
