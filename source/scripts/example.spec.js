var assert = require('chai').assert;

var isLoaded = require('./myModule.js');

describe('example', function () {
    it('should load this file', function () {
        var actual = 1000 + 200 + 30 + 4;
        assert.equal(1234, actual);
    });

    it.skip('should fail', function () {
        var actual = 1000 + 200 + 30 + 5;
        assert.equal(1234, actual);
    });

    it('should load myModule', function () {
        assert.equal('indeed', isLoaded);
    });
});
