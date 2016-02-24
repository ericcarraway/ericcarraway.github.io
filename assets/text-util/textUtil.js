var textUtil = {};

textUtil.uniqueWords = function (str) {
    // remove line breaks
    str = str.replace(/(\r\n|\n|\r)/gm, ' ');

    // split words
    var arr = str.split(' ');

    // trim words
    for (var word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    var returnArr = [];

    for (var i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (returnArr.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

textUtil.filterCommonProse= function (str) {
    // remove line breaks
    str = str.replace(/(\r\n|\n|\r)/gm, ' ');

    // split words
    var arr = str.split(' ');

    // trim words
    for (var word = 0; word < arr.length; word++) {
        arr[word] = arr[word].trim();
    }

    // bring together word lists
    // currently 4,179 unique words
    var prose = [].concat(deekayen, splasho, aspell);

    var returnArr = [];

    for (var i = 0; i < arr.length; i++) {
        // if the word in question does not exist in the array,
        // add it to the array
        if (prose.indexOf(arr[i]) === -1) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr.sort().join('\n');
};

var domManip = {};

domManip.getTextarea = function () {
    return document.getElementsByName('textarea')[0].value;
};

domManip.setTextarea = function (str) {
    document.getElementsByName('textarea')[0].value = str;
};

var app = {};

app.uniqueWords = function () {
    var words = domManip.getTextarea();
    words = textUtil.uniqueWords(words);
    domManip.setTextarea(words);
};

app.filterCommonProse= function () {
    var words = domManip.getTextarea();
    words = textUtil.filterCommonProse(words);
    domManip.setTextarea(words);
};
