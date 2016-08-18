var config = require('../config.js');

describe("'list unique words' button", function () {
    var btnSelector = 'button=list unique words';

    var inputText;
    var expectedText;
    var actualText;

    before(function () {
        browser.url(config.baseUrl);
    });

    afterEach(function () {
        browser.setValue('textarea', '');
    });

    it('should list words alphabetically', function () {
        inputText = 'the quick brown fox jumps over the lazy dog zebra aardvark';
        expectedText = [
            'aardvark',
            'brown',
            'dog',
            'fox',
            'jumps',
            'lazy',
            'over',
            'quick',
            'the',
            'zebra'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });

    it('should remove duplicates', function () {
        inputText = 'this this this is a test test test';
        expectedText = [
            'a',
            'is',
            'test',
            'this'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });

    it('should handle multiple consecutive spaces', function () {
        inputText = 'the  quick   brown     fox       jumps     over    the   lazy  dog';
        expectedText = [
            'brown',
            'dog',
            'fox',
            'jumps',
            'lazy',
            'over',
            'quick',
            'the'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });

    it('should trim leading spaces', function () {
        inputText = '              testing';
        expectedText = 'testing';

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });

    it('should trim trailing spaces', function () {
        inputText = 'fun              ';
        expectedText = 'fun';

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });

    it("should handle 'falsy' words", function () {
        inputText = 'null undefined empty false 0';
        expectedText = [
            '0',
            'empty',
            'false',
            'null',
            'undefined'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });

    it('should handle numbers', function () {
        inputText = '4 8 15 16 23 42';

        // sorts as strings, for now
        expectedText = [
            '15',
            '16',
            '23',
            '4',
            '42',
            '8'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });
});
