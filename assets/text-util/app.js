var app = app || {};

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
