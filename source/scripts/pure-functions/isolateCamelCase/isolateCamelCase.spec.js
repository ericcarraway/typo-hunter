/* jshint expr: true */

var isolateCamelCase = require('./isolateCamelCase.js');
var expect = require('chai').expect;

describe('isolateCamelCase', function () {
    var input;
    var actual;
    var expected;

    describe('smoke tests', function () {
        it('should exist', function () {
            expect(isolateCamelCase).to.exist;
        });

        it('should be a function', function () {
            expect(isolateCamelCase).to.be.a('function');
        });

        it('should return an array', function () {
            input = ['this', 'is', 'a', 'test'];
            expect(isolateCamelCase(input)).to.be.an('array');
        });
    });

    describe('tests', function () {
        it('initial test', function () {
            input = ['the', 'quick', 'brownFox', 'jumpsOver', 'the', 'lazyDog'];
            actual = isolateCamelCase(input);
            expected = ['brownFox', 'jumpsOver', 'lazyDog'];

            expect(actual).to.eql(expected);
        });

        it('should match a camelCase word', function () {
            input = ['fooBar', 'control'];
            actual = isolateCamelCase(input);
            expected = ['fooBar'];

            expect(actual).to.eql(expected);
        });

        it('should match camelCase words with multiple humps', function () {
            input = ['fooBarFizzBuzz', 'control'];
            actual = isolateCamelCase(input);
            expected = ['fooBarFizzBuzz'];

            expect(actual).to.eql(expected);
        });
    });

    describe('negative tests', function () {
        it('should not match PascalCase words [1]', function () {
            input = ['DoNotMatchThis'];
            actual = isolateCamelCase(input);
            expected = [];

            expect(actual).to.eql(expected);
        });

        it('should not match PascalCase words [2]', function () {
            input = ['DoNotMatchThis', 'FooBar', 'control', 'bazQux'];
            actual = isolateCamelCase(input);
            expected = ['bazQux'];

            expect(actual).to.eql(expected);
        });

        it('should not match Capital words [1]', function () {
            input = ['Foobar'];
            actual = isolateCamelCase(input);
            expected = [];

            expect(actual).to.eql(expected);
        });

        it('should not match Capital words [2]', function () {
            input = ['Foobar', 'control', 'bazQux'];
            actual = isolateCamelCase(input);
            expected = ['bazQux'];

            expect(actual).to.eql(expected);
        });

        it('should not match lowercase words [1]', function () {
            input = ['foobar'];
            actual = isolateCamelCase(input);
            expected = [];

            expect(actual).to.eql(expected);
        });

        it('should not match lowercase words', function () {
            input = ['foobar', 'control', 'bazQux'];
            actual = isolateCamelCase(input);
            expected = ['bazQux'];

            expect(actual).to.eql(expected);
        });
    });

    describe('edge cases', function () {
        it('should handle an empty array', function () {
            input = [];
            actual = isolateCamelCase(input);
            expected = [];

            expect(actual).to.eql(expected);
        });

        it('should handle an array with empty strings', function () {
            input = ['', '', ''];
            actual = isolateCamelCase(input);
            expected = [];

            expect(actual).to.eql(expected);
        });
    });
});
