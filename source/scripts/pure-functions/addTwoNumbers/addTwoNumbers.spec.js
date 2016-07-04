// 2016-07-04 this file is provided as an example of modularity and testing
var addTwoNumbers = require('./addTwoNumbers.js');
var expect = require('chai').expect;

describe('addTwoNumbers', function () {
    it('should add two numbers', function () {
        expect(addTwoNumbers(40, 2)).to.equal(42);
    });
});
