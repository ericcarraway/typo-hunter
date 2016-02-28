var app = app || {};

app.uniqueWords = function () {
    var words = domManip.getTextarea();
    words = textUtil.uniqueWords(words);
    domManip.setTextarea(words);
};

app.filterCommonProse = function () {
    var words = domManip.getTextarea();
    words = textUtil.filterCommonProse(words);
    domManip.setTextarea(words);
};

app.filterTmProse = function () {
    var words = domManip.getTextarea();
    words = textUtil.filterTmProse(words);
    domManip.setTextarea(words);
};

app.filterAlice = function () {
    var words = domManip.getTextarea();
    words = textUtil.filterAlice(words);
    domManip.setTextarea(words);
};
