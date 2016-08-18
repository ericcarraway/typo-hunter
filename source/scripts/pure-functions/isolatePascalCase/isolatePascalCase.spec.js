/* jshint expr: true */

var isolatePascalCase = require('./isolatePascalCase.js');
var expect = require('chai').expect;

describe('isolatePascalCase', function () {
    var input;
    var actual;
    var expected;

    describe('smoke tests', function () {
        it('should exist', function () {
            expect(isolatePascalCase).to.exist;
        });

        it('should be a function', function () {
            expect(isolatePascalCase).to.be.a('function');
        });

        it('should return an array', function () {
            input = ['this', 'is', 'a', 'test'];
            expect(isolatePascalCase(input)).to.be.an('array');
        });
    });

    describe('tests', function () {
        it('initial test', function () {
            input = ['the', 'quick', 'BrownFox', 'JumpsOver', 'the', 'LazyDog'];
            actual = isolatePascalCase(input);
            expected = ['BrownFox', 'JumpsOver', 'LazyDog'];

            expect(actual).to.eql(expected);
        });

        it('should match a PascalCase word', function () {
            input = ['FooBar', 'control'];
            actual = isolatePascalCase(input);
            expected = ['FooBar'];

            expect(actual).to.eql(expected);
        });

        it('should match PascalCase words with multiple humps', function () {
            input = ['FooBarFizzBuzz', 'control'];
            actual = isolatePascalCase(input);
            expected = ['FooBarFizzBuzz'];

            expect(actual).to.eql(expected);
        });
    });

    describe('negative tests', function () {
        it('should not match camelCase words [1]', function () {
            input = ['doNotMatchThis'];
            actual = isolatePascalCase(input);
            expected = [];

            expect(actual).to.eql(expected);
        });

        it('should not match camelCase words [2]', function () {
            input = ['doNotMatchThis', 'fooBar', 'control', 'BazQux'];
            actual = isolatePascalCase(input);
            expected = ['BazQux'];

            expect(actual).to.eql(expected);
        });

        it('should not match Capital words [1]', function () {
            input = ['Foobar'];
            actual = isolatePascalCase(input);
            expected = [];

            expect(actual).to.eql(expected);
        });

        it('should not match Capital words [2]', function () {
            input = ['Foobar', 'control', 'BazQux'];
            actual = isolatePascalCase(input);
            expected = ['BazQux'];

            expect(actual).to.eql(expected);
        });

        it('does not match lowercase words [1]', function () {
            input = ['foobar'];
            actual = isolatePascalCase(input);
            expected = [];

            expect(actual).to.eql(expected);
        });

        it('does not match lowercase words [2]', function () {
            input = ['foobar', 'control', 'BazQux'];
            actual = isolatePascalCase(input);
            expected = ['BazQux'];

            expect(actual).to.eql(expected);
        });
    });

    describe('edge cases', function () {
        it('handles an empty array', function () {
            input = [];
            actual = isolatePascalCase(input);
            expected = [];

            expect(actual).to.eql(expected);
        });

        it('handles an array with empty strings', function () {
            input = ['', '', ''];
            actual = isolatePascalCase(input);
            expected = [];

            expect(actual).to.eql(expected);
        });
    });
});
