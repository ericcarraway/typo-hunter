var domManip = domManip || {};

domManip.getTextarea = function () {
    return document.getElementsByName('textarea')[0].value;
};

domManip.setTextarea = function (str) {
    document.getElementsByName('textarea')[0].value = str;
};
