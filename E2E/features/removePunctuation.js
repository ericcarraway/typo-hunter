var config = require('../config.js');

describe('buttons', function () {
    before(function () {
        browser.url(config.baseUrl);
    });

    afterEach(function () {
        browser.setValue('textarea', '');
    });

    describe('remove punctuation button', function () {
        var btnSelector = 'button=remove punctuation';

        var inputText;
        var expectedText;
        var actualText;

        it('1', function () {
            inputText = "Let's eat, Grandpa!";
            expectedText = 'Let s eat  Grandpa';

            browser.setValue('textarea', inputText);
            browser.click(btnSelector);

            actualText = browser.getValue('textarea');
            expect(actualText).to.equal(expectedText);
        });

        it('2', function () {
            inputText = 'foo~!@#$%^&*()_+bar';
            expectedText = 'foo             bar';

            browser.setValue('textarea', inputText);
            browser.click(btnSelector);

            actualText = browser.getValue('textarea');
            expect(actualText).to.equal(expectedText);
        });

        it('3', function () {
            inputText = 'baz{}[]|;:qux';
            expectedText = 'baz       qux';

            browser.setValue('textarea', inputText);
            browser.click(btnSelector);

            actualText = browser.getValue('textarea');
            expect(actualText).to.equal(expectedText);
        });

        it('4', function () {
            inputText = 'foo ! " # $ % & bar ( ) * + , - — . baz';
            expectedText = 'foo             bar                 baz';

            browser.setValue('textarea', inputText);
            browser.click(btnSelector);

            actualText = browser.getValue('textarea');
            expect(actualText).to.equal(expectedText);
        });

        it('5', function () {
            inputText = 'foo / : ; < bar = > ? @ [ ] ^ _ ` baz';
            expectedText = 'foo         bar                   baz';

            browser.setValue('textarea', inputText);
            browser.click(btnSelector);

            actualText = browser.getValue('textarea');
            expect(actualText).to.equal(expectedText);
        });

        it('6', function () {
            inputText = 'foo { | } bar ~ → ✓ baz ✔ ✖ © · qux';
            expectedText = 'foo       bar       baz         qux';

            browser.setValue('textarea', inputText);
            browser.click(btnSelector);

            actualText = browser.getValue('textarea');
            expect(actualText).to.equal(expectedText);
        });
    });
});
