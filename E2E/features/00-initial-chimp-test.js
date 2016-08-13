// 2016-08-13

// https://chimp.readme.io/
// https://github.com/xolvio/chimp

// $ cd typo-hunter/E2E

// $ chimp --mocha --browser=firefox

describe('initial Chimp.js test', function () {
    describe('loading the main page', function () {
        // example from the documentation:
        it('should have the correct title', function () {
            var title;

            browser.url('http://typo-hunter.com');     // set up
            title = browser.getTitle();                // execute
            expect(title).to.equal('typo-hunter.com'); // verify
        });
    });
});
