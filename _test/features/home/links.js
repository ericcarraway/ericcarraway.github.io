var config = require('../../config.js');

describe.skip('home page links', function () {
    var selector = 'a';
    var arrayLinkText;

    before(function () {
        browser.url(config.baseUrl);
        arrayLinkText = browser.getText(selector);
    });

    describe('links', function () {
        it('should', function () {
            expect(arrayLinkText).to.include('example');
        });

        it('should demonstrate the getAttribute command', function () {
            // var elem = browser.element('#elem');
            //
            // var attr = elem.getAttribute('data-type');
            // console.log(attr); // outputs: "example"
            //
            // console.log(browser.getAttribute('#elem', 'data-type')); // outputs: "example"
            //
            // // if your selector matches multiple elements it returns an array of results
            var multipleElements = browser.elements('a');
            console.log(multipleElements.getAttribute('href'));
        });
    });
});

// 'ERIC CARRAWAY'
// 'Home'
// 'About'
// 'Music'
// 'Code'
// 'Talks'
// 'Miscellany'
// 'GitHub'
// 'BandDraft Games'
// 'https://www.facebook.com/banddraftgames/'
// 'http://carraway.me/toyota'
// 'http://5pointspercussion.org/'
// 'Facebook page'

// ------

// http://ericcarraway.com/
// http://ericcarraway.com/
// http://ericcarraway.com/about/
// http://ericcarraway.com/music/
// http://ericcarraway.com/code/
// http://ericcarraway.com/talks/
// http://ericcarraway.com/miscellany/
// https://github.com/ericcarraway
// http://banddraft.co/
// https://www.facebook.com/banddraftgames/
// http://carraway.me/toyota
// http://5pointspercussion.org/
// https://www.facebook.com/5points-1625994204338697/
// https://www.facebook.com/eric.carraway
// https://github.com/ericcarraway
// https://plus.google.com/+EricCarraway
// https://www.instagram.com/ericcarraway
// https://www.linkedin.com/in/ericcarraway
// https://www.pinterest.com/ericcarraway/
// https://soundcloud.com/eric-carraway
// https://play.spotify.com/user/gpit354
// https://twitter.com/carrawayeric
// https://vimeo.com/ericcarraway
// https://www.youtube.com/user/gpit354
