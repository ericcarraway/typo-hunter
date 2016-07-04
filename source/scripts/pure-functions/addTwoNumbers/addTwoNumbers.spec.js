var addTwoNumbers = require('./addTwoNumbers.js');
var expect = require('chai').expect;

describe('addTwoNumbers', function () {
    it('should add two numbers', function () {
        expect(addTwoNumbers(40, 2)).to.equal(42);
    });
});
