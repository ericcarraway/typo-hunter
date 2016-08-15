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

app.filter_2016_04_07 = function () {
    var words = domManip.getTextarea();
    words = textUtil.filter_2016_04_07(words);
    domManip.setTextarea(words);
};

app.filter_2016_04_25 = function () {
    var words = domManip.getTextarea();
    words = textUtil.filter_2016_04_25(words);
    domManip.setTextarea(words);
};

app.filter_2016_05_14 = function () {
    var words = domManip.getTextarea();
    words = textUtil.filter_2016_05_14(words);
    domManip.setTextarea(words);
};

app.filterPapa = function () {
    var words = domManip.getTextarea();
    words = textUtil.filterPapa(words);
    domManip.setTextarea(words);
};

app.filterAirbnb = function () {
    var words = domManip.getTextarea();
    words = textUtil.filterAirbnb(words);
    domManip.setTextarea(words);
};

app.filterAngular1 = function () {
    var words = domManip.getTextarea();
    words = textUtil.filterAngular1(words);
    domManip.setTextarea(words);
};

app.removeAllPunctuation = function () {
    var words = domManip.getTextarea();
    words = textUtil.removePunctuation(words);
    domManip.setTextarea(words);
};

app.newlineToSpace = function () {
    var words = domManip.getTextarea();
    words = textUtil.newlineToSpace(words);
    domManip.setTextarea(words);
};

app.trim = function () {
    var words = domManip.getTextarea();
    words = textUtil.trim(words);
    domManip.setTextarea(words);
};

app.filterEmptyLines = function () {
    var words = domManip.getTextarea();
    words = textUtil.filterEmptyLines(words);
    domManip.setTextarea(words);
};
