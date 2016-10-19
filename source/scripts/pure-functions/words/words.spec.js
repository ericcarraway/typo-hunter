/* jshint esversion: 6 */

/* eslint prefer-const: "error" */
/* eslint-env es6 */

const _ = require('lodash');
const expect = require('chai').expect;

// consider RegEx and punctuation
// excludes commas, includes periods and quotation marks
describe('words', function () {
    var input;
    var actual;
    var expected;

    it('should be a function', function () {
        expect(_.words).to.be.a('function');
    });

    it('should convert a string to an array of words (1)', function () {
        input = "Why, sometimes I've believed as many as six impossible things before breakfast.";
        actual = _.words(input, /[^, ]+/g);
        expected = [
            'Why',
            'sometimes',
            "I've",
            'believed',
            'as',
            'many',
            'as',
            'six',
            'impossible',
            'things',
            'before',
            'breakfast.'
        ];

        expect(actual).to.eql(expected);
    });

    it('should convert a string to an array of words (2)', function () {
        input = 'Fourscore and seven years ago our fathers brought forth, upon this continent, a new nation, ' +
                'conceived in liberty and dedicated to the proposition that "all men are created equal."';
        actual = _.words(input, /[^, ]+/g);
        expected = [
            'Fourscore',
            'and',
            'seven',
            'years',
            'ago',
            'our',
            'fathers',
            'brought',
            'forth',
            'upon',
            'this',
            'continent',
            'a',
            'new',
            'nation',
            'conceived',
            'in',
            'liberty',
            'and',
            'dedicated',
            'to',
            'the',
            'proposition',
            'that',
            '\"all',
            'men',
            'are',
            'created',
            'equal.\"'
        ];

        expect(actual).to.eql(expected);
    });
});
