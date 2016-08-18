var config = require('../config.js');

describe('buttons', function () {
    before(function () {
        browser.url(config.baseUrl);
    });

    afterEach(function () {
        browser.setValue('textarea', '');
    });

    it('should filter common prose [1]', function () {
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

    it('should filter common prose [2]', function () {
        var inputText = 'the quick brown fox jumps over the lazy dog zebra aardvark';
        var expectedText = ['aardvark', 'fox', 'zebra'].join('\n');
        var actualText;
        var btnSelector = 'button=filter common prose';

        browser.click('textarea');
        browser.keys(inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });

    it('should filter common prose [3]', function () {
        // it should handle whitespace
        var inputText = ' cow fox    zebra    aardvark    cat dog     elephant    ';
        var expectedText = ['aardvark', 'elephant', 'fox', 'zebra'].join('\n');
        var actualText;
        var btnSelector = 'button=filter common prose';

        browser.click('textarea');
        browser.keys(inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });
});
