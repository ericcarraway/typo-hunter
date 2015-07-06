var filterHtmlTags = function (str) {
  var arr = str.split('');
  var filterIsOn = false;
  var returnVal = [
  ];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '<') {
      filterIsOn = true;
      continue;
    } 
    else if (arr[i] === '>') {
      returnVal.push(' ');
      filterIsOn = false;
      continue;
    } 
    else if (filterIsOn === false) {
      returnVal.push(arr[i]);
    }
  }
  return returnVal.join('');
};

// var strToFilter = `paste text between these backticks`;
// var filteredStr = filterHtmlTags(strToFilter);
// filteredStr;

/*

var filterComments = function (str) {
  'use strict';
  str = str.replace('<!--','`');
  str


};*/

