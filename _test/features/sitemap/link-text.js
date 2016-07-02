describe('\'Sitemap\' page: link text', function () {
    var selector = 'div.sitemap a';
    var arrayLinkText;

    before(function () {
        browser.url('http://ericcarraway.com/sitemap/');
        arrayLinkText = browser.getText(selector);
    });

    describe('\'Music\' links', function () {
        it('should include \'Blue in Green\'', function () {
            expect(arrayLinkText).to.include('Blue in Green');
        });

        it('should include \'Blue Ocean Floor\'', function () {
            expect(arrayLinkText).to.include('Blue Ocean Floor');
        });

        it('should include \'Bobby Hutcherson Maiden Voyage\'', function () {
            expect(arrayLinkText).to.include('Bobby Hutcherson Maiden Voyage');
        });

        it('should include \'Dave Matthews Glassmen\'', function () {
            expect(arrayLinkText).to.include('Dave Matthews Glassmen');
        });

        it('should include \'Double Latte\'', function () {
            expect(arrayLinkText).to.include('Double Latte');
        });

        it('should include \'Electronic Drums Cart\'', function () {
            expect(arrayLinkText).to.include('Electronic Drums Cart');
        });

        it('should include \'Let Go\'', function () {
            expect(arrayLinkText).to.include('Let Go');
        });

        it('should include \'Naima\'', function () {
            expect(arrayLinkText).to.include('Naima');
        });

        it('should include \'Triplet Diddle Game of Thrones\'', function () {
            expect(arrayLinkText).to.include('Triplet Diddle Game of Thrones');
        });
    });

    describe('\'Code\' links', function () {
        it('should include \'CodingBat JavaScript\'', function () {
            expect(arrayLinkText).to.include('CodingBat JavaScript');
        });

        it('should include \'Recommended Tools\'', function () {
            expect(arrayLinkText).to.include('Recommended Tools');
        });
    });

    describe('\'Miscellany\' links', function () {
        it('should include \'2015 in Audiobooks\'', function () {
            expect(arrayLinkText).to.include('2015 in Audiobooks');
        });

        it('should include \'Crustified Cast Iron Steak\'', function () {
            expect(arrayLinkText).to.include('Crustified Cast Iron Steak');
        });

        it('should include \'Fitness\'', function () {
            expect(arrayLinkText).to.include('Fitness');
        });

        it('should include \'Old Fashioned Recipe\'', function () {
            expect(arrayLinkText).to.include('Old Fashioned Recipe');
        });

        it('should include \'Workday Percentage Clock\'', function () {
            expect(arrayLinkText).to.include('Workday Percentage Clock');
        });
    });
});
