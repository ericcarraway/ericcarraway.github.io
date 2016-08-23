var config = require('../config.js');

describe('initial tests', function () {
    var navbarLinks = {
        home: 'li.nav-home',
        about: 'li.nav-about',
        music: 'li.nav-music',
        code: 'li.nav-code',
        talks: 'li.nav-talks',
        miscellany: 'li.nav-miscellany'
    };

    before(function () {
        browser.url(config.baseUrl);
    });

    describe('loading the main page', function () {
        it('should have the correct title', function () {
            var title = browser.getTitle();
            expect(title).to.equal('Eric Carraway');
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
