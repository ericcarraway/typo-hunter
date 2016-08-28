/* jshint esversion: 6 */

/* eslint prefer-const: "error" */
/* eslint-env es6 */

const _ = require('lodash');
const expect = require('chai').expect;

describe.only('words', function () {
    var input;
    var actual;
    var expected;

    it('should be a function', function () {
        expect(_.words).to.be.a('function');
    });

    it('should convert a string to an array of words', function () {
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
});
