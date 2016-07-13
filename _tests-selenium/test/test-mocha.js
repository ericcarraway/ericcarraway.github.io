// test-mocha.js

// $ npm install expect.js
// expect.js@0.3.1 node_modules/expect.js

// $ npm install mocha
// mocha@2.5.3 node_modules/mocha

var expect = require('expect.js');
var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

it('should return "Google"', function (done) {
    webdriverio
        .remote(options)
        .init()
        .url('http://www.google.com')
        .title(function(err, res) {
            var title = res.value;
            expect(title).to.be('Google');
            done();
        })
        .end();
});
