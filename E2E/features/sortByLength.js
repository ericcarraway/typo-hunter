var config = require('../config.js');

describe("'sort by length' button", function () {
    var btnSelector = 'button=sort by length';

    var inputText;
    var expectedText;
    var actualText;

    before(function () {
        browser.url(config.baseUrl);
    });

    afterEach(function () {
        browser.setValue('textarea', '');
    });

    it('should sort words by length', function () {
        inputText = 'an aardvark and a quick brown fun fox jumps over the fat lazy dog and zebra';
        expectedText = [
            'a',
            'an',
            'and',
            'and',
            'dog',
            'fat',
            'fox',
            'fun',
            'the',
            'lazy',
            'over',
            'brown',
            'jumps',
            'quick',
            'zebra',
            'aardvark'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');

        expect(actualText).to.equal(expectedText);
    });
});
