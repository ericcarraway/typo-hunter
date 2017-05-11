/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }]*/

var removePunctuation = require('./removePunctuation.js');
var expect = require('chai').expect;

describe('removePunctuation', function () {
    it('should be a function', function () {
        expect(removePunctuation).to.be.a('function');
    });

    it('should remove forward slashes', function () {
        var input    = '// / ///';
        var expected = '        ';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('should remove hard tabs', function () {
        var input    = 'a \t \t \tb';
        var expected = 'a      b';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('should leave a string without punctuation unchanged', function () {
        var input    = 'this is a test';
        var expected = 'this is a test';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 1', function () {
        var input    = 'foo ~!@#$ bar %^&*()_+ baz';
        var expected = 'foo       bar          baz';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 2', function () {
        var input    = 'foo `` 123 - = {} [] baz';
        var expected = 'foo    123           baz';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 3', function () {
        var input    = ' → ✓✔ ✖ foo ©·· bar “”″ baz ’';
        var expected = '        foo     bar     baz  ';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 4', function () {
        var input    = '!"#$%&';
        var expected = '      ';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 5', function () {
        var input    = " '''test''' ";
        var expected = '    test    ';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 6', function () {
        var input    = 'test();';
        var expected = 'test   ';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 7', function () {
        var input    = 'asdf* + , - — .';
        var expected = 'asdf           ';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 8', function () {
        var input    = ':;<=>qwerty';
        var expected = '     qwerty';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 9', function () {
        var input    = ':;<=>qwerty';
        var expected = '     qwerty';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 10', function () {
        var input    = ' z]^_`y{|}~xx';
        var expected = ' z    y    xx';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 11', function () {
        var input    = '?a? @b@ c []  d ';
        var expected = ' a   b  c     d ';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set 12', function () {
        var input    = 'e👍 f› ⬆g │hi☁ jーk ♥♥♥ l';
        var expected = 'e   f   g  hi  j k     l';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('set May 10, 2017', function () {
        var input    = 'a⎦⎥t⎤e⎣s⎢t⎡⋅←zz';
        var expected = 'a  t e s t   zz';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('should keep numbers', function () {
        var input    = '0123456789';
        var expected = '0123456789';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it('rename this test', function () {
        var input    = '¡¢£¤t¥e¦s§t¨ª«¬®°±²³´µ¶¸¹º»¼½¾¿‘‚„†‡•…‰€™➜⬆›👍😊★☆│☁ー♥zzz';
        var expected = '    t e s t                                           zzz';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it("should remove a 'single quote' character", function () {
        var input    = 'foo\'bar';
        var expected = 'foo bar';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it("should remove a 'thumbs-up' emoji", function () {
        var input    = 'foo👍bar';
        var expected = 'foo  bar';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it("should remove a 'fat arrow' character", function () {
        var input    = 'foo➜bar';
        var expected = 'foo bar';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it("should remove a 'registered trademark' character", function () {
        var input    = 'foo®bar';
        var expected = 'foo bar';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it("should remove a 'double quote' character", function () {
        var input    = 'foo\"bar';
        var expected = 'foo bar';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it("should remove a 'backslash' character", function () {
        var input    = 'foo\\bar';
        var expected = 'foo bar';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it("should remove a 'tab' character", function () {
        var input    = 'foo\tbar';
        var expected = 'foo bar';
        expect(removePunctuation(input)).to.eql(expected);
    });

    it("should remove a 'new line' character", function () {
        var input    = 'foo\nbar';
        var expected = 'foo bar';

        expect(removePunctuation(input)).to.eql(expected);
    });

    it("should remove a 'backspace' character", function () {
        var input    = 'foo\bbar';
        var expected = 'foo bar';

        expect(removePunctuation(input)).to.eql(expected);
    });

    it("should remove a 'form feed' character", function () {
        var input    = 'foo\fbar';
        var expected = 'foo bar';

        expect(removePunctuation(input)).to.eql(expected);
    });
});
