var config = require('../config.js');

describe('buttons', function () {
    before(function () {
        browser.url(config.baseUrl);
    });

    afterEach(function () {
        browser.setValue('textarea', '');
    });

    it('should list unique words', function () {
        var inputText = 'this this this is a test test test';
        var expectedText = ['a', 'is', 'test', 'this'].join('\n');
        var actualText;
        var btnSelector = 'button=list unique words';

        browser.click('textarea');
        browser.keys(inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');

        expect(actualText).to.equal(expectedText);
    });

    it('should filter common prose', function () {
        var inputText = "Please don't allow the children to play with knives.";
        var expectedText = ['Please', "don't", 'knives.'].join('\n');
        var actualText;
        var btnSelector = 'button=filter common prose';

        browser.click('textarea');
        browser.keys(inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });
});
