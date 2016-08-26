var config = require('../config.js');

describe("'GH PR' button", function () {
    var btnSelector = 'button=GH PR';

    var inputText;
    var expectedText;
    var actualText;

    before(function () {
        browser.url(config.baseUrl);
    });

    afterEach(function () {
        browser.setValue('textarea', '');
    });

    // Friday, 2016-08-26
    it('should filter words added in commit ea23078', function () {
        inputText = [
            'All',
            'keep',
            'Depending',
            'Options',
            'these',
            'Participating',
            'Private',
            'Unread',
            'words',
            'Unstar',
            'Watching'
        ].join(' ');

        expectedText = [
            'keep',
            'these',
            'words'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });
});
