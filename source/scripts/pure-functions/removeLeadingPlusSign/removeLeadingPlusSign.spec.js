var removeLeadingPlusSign = require('./removeLeadingPlusSign.js');
var expect = require('chai').expect;

describe('removeLeadingPlusSign', function () {
    var actual;
    var expected;

    describe('smoke tests', function () {
        it('should exist', function () {
            // Expected an assignment or function call and instead saw an expression.
            /* jshint -W030 */
            expect(removeLeadingPlusSign).to.exist;
        });

        it('should be a function', function () {
            expect(removeLeadingPlusSign).to.be.a('function');
        });
    });

    describe('tests', function () {
        it('should handle an empty string', function () {
            actual = removeLeadingPlusSign('');
            expected = '';

            expect(actual).to.eql(expected);
        });

        it('should not change a word without a leading plus sign', function () {
            actual = removeLeadingPlusSign('foo');
            expected = 'foo';

            expect(actual).to.eql(expected);
        });

        it('should remove a leading plus sign', function () {
            actual = removeLeadingPlusSign('+bar');
            expected = 'bar';

            expect(actual).to.eql(expected);
        });

        it('should remove only one leading plus sign', function () {
            actual = removeLeadingPlusSign('++baz');
            expected = '+baz';

            expect(actual).to.eql(expected);
        });
    });
});
