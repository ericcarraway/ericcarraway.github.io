console.log('assets/js/scripts.js loaded');

$(document).ready(function () {
    // get the current page and add an 'active' class in the navbar
    var navClass;
    if (window.location.pathname === '/') {
        navClass = 'home';
    } else {
        navClass = window.location.pathname.split('/')[1].toLowerCase();
    }
    var knownPaths = [
        'home',
        'about',
        'music',
        'code',
        'miscellany'
    ];
    if (knownPaths.indexOf(navClass) > -1) {
        $('li.nav-' + navClass).addClass('active');
    }
});
