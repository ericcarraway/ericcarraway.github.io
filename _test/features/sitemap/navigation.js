var config = require('../../config.js');

describe('\'Sitemap\' page: navigation via links', function () {
    var heading;

    before(function () {
        browser.url(config.baseUrl + 'sitemap');
    });

    afterEach(function () {
        browser.back();
    });

    describe('\'Music\' links', function () {
        it('should navigate to \'Blue in Green\'', function () {
            browser.click('a=Blue in Green');
            heading = browser.getText('h1');
            expect(heading).to.equal('Blue In Green for Front Ensemble');
        });

        it('should navigate to \'Blue Ocean Floor\'', function () {
            browser.click('a=Blue Ocean Floor');
            heading = browser.getText('h1');
            expect(heading).to.equal('Blue Ocean Floor for Front Ensemble');
        });

        it('should navigate to \'Bobby Hutcherson Maiden Voyage\'', function () {
            browser.click('a=Bobby Hutcherson Maiden Voyage');
            heading = browser.getText('h1');
            expect(heading).to.equal('Bobby Hutcherson Solo Transcription: Maiden Voyage');
        });

        it('should navigate to \'Dave Matthews Glassmen\'', function () {
            browser.click('a=Dave Matthews Glassmen');
            heading = browser.getText('h1');
            expect(heading).to.equal('The Dreaming Tree & The Stone for Front Ensemble');
        });

        it('should navigate to \'Double Latte\'', function () {
            browser.click('a=Double Latte');
            heading = browser.getText('h1');
            expect(heading).to.equal('Double Latte for Front Ensemble');
        });

        it.skip('should navigate to \'Electronic Drums Cart\'', function () {
            // Element is not clickable at point (?)
            // Other element would receive the click
        });

        it.skip('should navigate to \'Let Go\'', function () {

        });

        it.skip('should navigate to \'Naima\'', function () {

        });

        it.skip('should navigate to \'Triplet Diddle Game of Thrones\'', function () {

        });
    });

    describe('\'Code\' links', function () {
        it('should navigate to \'CodingBat JavaScript\'', function () {
            browser.click('a=CodingBat JavaScript');
            heading = browser.getText('h1');
            expect(heading).to.equal('CodingBat Problems in JavaScript');
        });

        it('should navigate to \'Recommended Tools\'', function () {
            browser.click('a=Recommended Tools');
            heading = browser.getText('h1');
            expect(heading).to.equal('Recommended Tools');
        });
    });

    describe('\'Miscellany\' links', function () {
        it('should navigate to \'2015 in Audiobooks\'', function () {
            browser.click('a=2015 in Audiobooks');
            heading = browser.getText('h1');
            expect(heading).to.equal('2015 in Audiobooks');
        });

        it('should navigate to \'Crustified Cast Iron Steak\'', function () {
            browser.click('a=Crustified Cast Iron Steak');
            heading = browser.getText('h1');
            expect(heading).to.equal('Crustified Cast Iron Steak');
        });

        it('should navigate to \'Fitness\'', function () {
            browser.click('a=Fitness');
            heading = browser.getText('h1');
            expect(heading).to.equal('Fitness');
        });

        it('should navigate to \'Old Fashioned Recipe\'', function () {
            browser.click('a=Old Fashioned Recipe');
            heading = browser.getText('h1');
            expect(heading).to.equal('Old Fashioned Cocktail Recipe');
        });

        it('should navigate to \'Workday Percentage Clock\'', function () {
            browser.click('a=Workday Percentage Clock');
            heading = browser.getText('h1');
            expect(heading).to.equal('Workday Percentage Clock');
        });
    });
});
