var webdriverio = require('webdriverio');

var BASE_URL = 'http://www.ericcarraway.com';
// var BASE_URL = 'http://localhost:4000/';

// set up some options for our instance
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

// start a new session with our options
var client = webdriverio.remote(options);

console.log('starting...');
client
    .init()
    .url(BASE_URL)
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
