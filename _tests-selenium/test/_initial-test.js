// http://webdriver.io/

// require the module
var webdriverio = require('webdriverio');

// set up some options for our instance
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

// start a new session with our options
var client = webdriverio.remote(options);

client
    .init()
    .url('http://www.ericcarraway.com')
    .getTitle().then(function (title) {
        console.log('Title is: ' + title);
    })
    .getUrl().then(function (url) {
        console.log('Url is: ' + url);
    })
    .end();

// run this file:

// $ node _tests-selenium/test/_initial-test.js

// outputs:

// Title is: Eric Carraway
// Url is: http://ericcarraway.com/
