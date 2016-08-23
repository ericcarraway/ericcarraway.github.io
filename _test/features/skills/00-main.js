var config = require('../../config.js');

describe('\'Skills\' page', function () {
    var containerText;

    before(function () {
        browser.url(config.baseUrl + 'skills');
        containerText = browser.getText('div.container.skills-page');

        // make an array
        containerText = containerText.split('\n');
    });

    it('should have the correct header text', function () {
        var pageTitle = browser.getText('h1');
        expect(pageTitle).to.equal('Skills');
    });

    describe('list of skills', function () {
        it('should list JavaScript', function () {
            expect(containerText).to.include('JavaScript');
        });

        it('should list AngularJS', function () {
            expect(containerText).to.include('AngularJS');
        });
    });
});
