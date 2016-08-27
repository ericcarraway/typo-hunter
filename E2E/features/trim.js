var config = require('../config.js');

describe("'trim' button", function () {
    var btnSelector = 'button=trim';

    var inputText;
    var expectedText;
    var actualText;

    before(function () {
        browser.url(config.baseUrl);
    });

    afterEach(function () {
        browser.setValue('textarea', '');
    });

    it('should trim words', function () {
        inputText = [
            ' leading',
            'trailing ',
            'control',
            '  leading',
            'trailing  ',
            'control',
            '          leading',
            'trailing         ',
            'control'
        ].join('\n');

        expectedText = [
            'leading',
            'trailing',
            'control',
            'leading',
            'trailing',
            'control',
            'leading',
            'trailing',
            'control'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });
});
