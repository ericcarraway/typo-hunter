var config = require('../config.js');

describe("'sort by length' button", function () {
    var btnSelector = 'button=sort by length (reverse)';

    var inputText;
    var expectedText;
    var actualText;

    before(function () {
        browser.url(config.baseUrl);
    });

    afterEach(function () {
        browser.setValue('textarea', '');
    });

    it('should sort words by length (reverse)', function () {
        inputText = 'The lurking imbalance poles the debt.';
        expectedText = [
            'imbalance',
            'lurking',
            'poles',
            'debt.',
            'The',
            'the'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');

        expect(actualText).to.equal(expectedText);
    });
});
