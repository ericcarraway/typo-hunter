/* jshint expr: true */

var removeContractions = require('./removeContractions.js');
var expect = require('chai').expect;

describe('removeContractions', function () {
    var input;

    describe('smoke tests', function () {
        it('should exist', function () {
            expect(removeContractions).to.exist;
        });

        it('should be a function', function () {
            expect(removeContractions).to.be.a('function');
        });

        it('should return an array', function () {
            input = ['this', 'is', 'a', 'test'];
            expect(removeContractions(input)).to.be.an('array');
        });
    });

    describe('tests', function () {
        it('group 1', function () {
            input = ['foo', 'bar', "'tis", "'twas"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 2', function () {
            input = ['foo', 'bar', "I\'d", "I\'ll", "I\'m", "I\'ve"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 3', function () {
            input = ['foo', 'bar', "aren\'t", "can\'t", "could\'ve", "couldn\'t", "didn\'t"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 4', function () {
            input = ['foo', 'bar', "doesn\'t", "don\'t", "aren\'t", "can\'t", "could\'ve"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 5', function () {
            input = ['foo', 'bar', "couldn\'t", "didn\'t", "doesn\'t", "don\'t"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 6', function () {
            input = ['foo', 'bar', "hadn\'t", "hasn\'t", "haven\'t", "he\'d", "he\'ll", "he\'s", "how\'d", "how\'ll"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 7', function () {
            input = ['foo', 'bar', "how\'s", "isn\'t", "it\'d", "it\'ll", "it\'s", "ma\'am", "might\'ve", "mightn\'t"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 8', function () {
            input = ['foo', 'bar', "must\'ve", "mustn\'t", "o\'clock", "she\'d", "she\'ll", "she\'s", "should\'ve"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 9', function () {
            input = ['foo', 'bar', "shouldn\'t", "that\'d", "that\'ll", "that\'s", "they\'d"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 10', function () {
            input = ['foo', 'bar', "they\'ll", "they\'re", "they\'ve", "wasn\'t", "we\'d"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 11', function () {
            input = ['foo', 'bar', "what\'ll", "we\'ll", "we\'re", "we\'ve", "weren\'t", "what\'d"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 12', function () {
            input = ['foo', 'bar', "what\'re", "what\'s", "when\'d", "when\'ll", "when\'s", "where\'d"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 13', function () {
            input = ['foo', 'bar', "where\'ll", "where\'s", "who\'d", "who\'ll", "who\'s"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 14', function () {
            input = ['foo', 'bar', "why\'d", "why\'ll", "why\'s", "won\'t", "would\'ve"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });

        it('group 15', function () {
            input = ['foo', 'bar', "wouldn\'t", "you\'d", "you\'ll", "you\'re", "you\'ve"];
            expect(removeContractions(input)).to.eql(['foo', 'bar']);
        });
    });

    describe('edge cases', function () {
        it('handles an empty array', function () {
            input = [];
            actual = removeContractions(input);
            expected = [];

            expect(actual).to.eql(expected);
        });

        it('handles an array with empty strings', function () {
            input = ['', '', ''];
            actual = removeContractions(input);
            expected = ['', '', ''];

            expect(actual).to.eql(expected);
        });
    });
});
