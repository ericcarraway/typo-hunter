var config = require('../config.js');

describe('initial tests', function () {
    before(function () {
        browser.url(config.baseUrl);
    });

    it('should have the correct title', function () {
        var title = browser.getTitle();

        expect(title).to.equal('typo-hunter.com');
    });

    it('should have 18 buttons', function () {
        var selector = 'button';
        var elements = browser.elements(selector);

        expect(elements.value.length).to.equal(18);
    });

    it('should have the correct button text', function () {
        var selector = 'button';
        var arrayBtnTxtActual;
        var arrayBtnTxtExpected = [
            'list unique words',
            'filter common prose',
            'remove punctuation',
            'trim',
            'TM',
            'alice.txt',
            '2016-04-07',
            '2016-04-25',
            'JP SG',
            'air',
            'angular docs',
            'rxPageObjects',
            '2016-05-14',
            'newline to space',
            'remove empty lines',
            'GH PR',
            'remove numbers',
            'remove contractions'
        ];

        arrayBtnTxtActual = browser.getText(selector);

        expect(arrayBtnTxtActual).to.eql(arrayBtnTxtExpected);
    });

    it('should have a text area', function () {
        var selector = 'textarea';
        var doesExist = browser.waitForExist(selector);

        expect(doesExist).to.be.true;
    });

    describe('github-fork-ribbon', function () {
        var selector = 'a.github-fork-ribbon';

        it('should exist', function () {
            var doesExist = browser.waitForExist(selector);
            expect(doesExist).to.be.true;
        });

        it('should have the correct text', function () {
            var ribbonText = browser.getText(selector);
            expect(ribbonText).to.equal('Fork me on GitHub');
        });
    });
});
