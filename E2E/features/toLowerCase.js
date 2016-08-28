var config = require('../config.js');

describe("'toLowerCase()' button", function () {
    var btnSelector = 'button=toLowerCase()';

    var inputText;
    var expectedText;
    var actualText;

    before(function () {
        browser.url(config.baseUrl);
    });

    afterEach(function () {
        browser.setValue('textarea', '');
    });

    it('should convert to lowercase', function () {
        inputText = [
            '“But I don’t want to go among mad people," Alice remarked.',
            '"Oh, you can’t help that," said the Cat: "we’re all mad here. I’m mad. You’re mad."',
            '"How do you know I’m mad?" said Alice.',
            '"You must be," said the Cat, "or you wouldn’t have come here.”'
        ].join('\n');

        expectedText = [
            '“but i don’t want to go among mad people," alice remarked.',
            '"oh, you can’t help that," said the cat: "we’re all mad here. i’m mad. you’re mad."',
            '"how do you know i’m mad?" said alice.',
            '"you must be," said the cat, "or you wouldn’t have come here.”'
        ].join('\n');

        browser.setValue('textarea', inputText);
        browser.click(btnSelector);

        actualText = browser.getValue('textarea');
        expect(actualText).to.equal(expectedText);
    });
});
