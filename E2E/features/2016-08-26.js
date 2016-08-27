var config = require('../config.js');

describe("'2016-08-26' button", function () {
    var btnSelector = 'button=2016-08-26';

    var inputText;
    var expectedText;
    var actualText;

    before(function () {
        browser.url(config.baseUrl);
    });

    afterEach(function () {
        browser.setValue('textarea', '');
    });

    it('should filter words in wordlist: 2016-08-26', function () {
        inputText = [
            'accelerate',
            'behaviors',
            'KEEP',
            'cancelation',
            'decades',
            'eliminating',
            'films',
            'gender',
            'ignorance',
            'latency',
            'maintainer',
            'THESE',
            'normalize',
            'offerings',
            'parametrize',
            'qualifications',
            'rationale',
            'scared',
            'taxes',
            'uncompressed',
            'versatility',
            'WORDS',
            'workflow',
            'yield'
        ].join(' ');

        expectedText = [
            'KEEP',
            'THESE',
            'WORDS'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });
});
