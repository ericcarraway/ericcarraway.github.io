// 2016-07-01

// https://chimp.readme.io/
// https://github.com/xolvio/chimp

// $ cd ericcarraway.github.io/_test

// $ chimp --mocha --browser=firefox

describe('initial Chimp.js test', function () {
    var navbarLinks = {
        home: 'li.nav-home',
        about: 'li.nav-about',
        music: 'li.nav-music',
        code: 'li.nav-code',
        talks: 'li.nav-talks',
        miscellany: 'li.nav-miscellany'
    };

    describe('loading the main page', function () {
        // example from the documentation:
        it('should have the correct title', function () {
            var title;

            browser.url('http://ericcarraway.com');  // set up
            title = browser.getTitle();              // execute
            expect(title).to.equal('Eric Carraway'); // verify
        });
    });

    describe('basic navigation', function () {
        var pageTitle;

        it('should navigate to the \'About\' page', function () {
            browser.click(navbarLinks.about);
            pageTitle = browser.getText('h1');
            expect(pageTitle).to.equal('About');
        });

        it('should navigate to the \'Music\' page', function () {
            browser.click(navbarLinks.music);
            pageTitle = browser.getText('h1');
            expect(pageTitle).to.equal('Music');
        });

        it('should navigate to the \'Code\' page', function () {
            browser.click(navbarLinks.code);
            pageTitle = browser.getText('h1');
            expect(pageTitle).to.equal('Code');
        });

        it('should navigate to the \'Talks\' page', function () {
            browser.click(navbarLinks.talks);
            pageTitle = browser.getText('h1');
            expect(pageTitle).to.equal('Talks');
        });

        it('should navigate to the \'Miscellany\' page', function () {
            browser.click(navbarLinks.miscellany);
            pageTitle = browser.getText('h1');
            expect(pageTitle).to.equal('Miscellany');
        });
    });
});
