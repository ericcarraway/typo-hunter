var isolateLinesContaining = require('./isolateLinesContaining.js');
var expect = require('chai').expect;

describe('isolateLinesContaining', function () {
    var actual;
    var expected;

    it('should exist', function () {
        /* jshint -W030 */
        expect(isolateLinesContaining).to.exist;
    });

    it('should be a function', function () {
        expect(isolateLinesContaining).to.be.a('function');
    });

    // quick test for now
    // #TODO: flush this out
    it('should isolate email addresses', function () {
        actual = isolateLinesContaining([
            'this',
            'is a test',
            'john@example.com',
            'foo@bar.com'
        ], '@');

        expected = [
            'john@example.com',
            'foo@bar.com'
        ];

        expect(actual).to.eql(expected);
    });
});
