var expect = require('chai').expect;

describe('foo', function () {
    it('should use \'expect\'', function () {
        var foo = ['a', 'b', 'c'];
        expect(foo).to.have.length(3);
    });
});
