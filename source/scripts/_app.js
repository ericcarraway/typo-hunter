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

app.toLowerCase = function () {
    var words = domManip.getTextarea();
    words = words.toLowerCase();
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

app.filter_2016_08_26 = function () {
    var words = domManip.getTextarea();
    var arrayOfWords = stringToArrayOfWords(words);
    arrayOfWords = filterByArr(arrayOfWords, wordlists._2016_08_26);
    arrayOfWords = arrayOfWords.join('\n');
    domManip.setTextarea(arrayOfWords);
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

app.filterRxPageObjects = function () {
    var words = domManip.getTextarea();
    words = textUtil.filterRxPageObjects(words);
    domManip.setTextarea(words);
};

app.filterGitHub = function () {
    var words = domManip.getTextarea();
    words = textUtil.filterGitHub(words);
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

app.sortByLength = function () {
    var words = domManip.getTextarea();
    var arrayOfWords = stringToArrayOfWords(words);
    arrayOfWords = sortByLength(arrayOfWords);
    arrayOfWords = arrayOfWords.join('\n');
    domManip.setTextarea(arrayOfWords);
};

app.sortByLengthReverse = function () {
    var words = domManip.getTextarea();
    var arrayOfWords = stringToArrayOfWords(words);
    arrayOfWords = sortByLength(arrayOfWords).reverse().join('\n');
    domManip.setTextarea(arrayOfWords);
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

app.filterNumbers = function () {
    var words = domManip.getTextarea();
    words = textUtil.filterNumbers(words);
    domManip.setTextarea(words);
};

app.removeContractions = function () {
    var words = domManip.getTextarea();
    var arrayOfWords = stringToArrayOfWords(words);
    arrayOfWords = removeContractions(arrayOfWords);
    arrayOfWords = arrayOfWords.join('\n');
    domManip.setTextarea(arrayOfWords);
};
