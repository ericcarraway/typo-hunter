function trimLinesLeft(str) {
  var arrayOfLines = str.match(/[^\r\n]+/g);
  var i;
  for(i = 0; i < arrayOfLines.length; i++) {
    arrayOfLines[i] = arrayOfLines[i].trimLeft();
  }
  return arrayOfLines.join('\n');
}

function trimLinesRight(str) {
  var arrayOfLines = str.match(/[^\r\n]+/g);
  var i;
  for(i = 0; i < arrayOfLines.length; i++) {
    arrayOfLines[i] = arrayOfLines[i].trimRight();
  }
  return arrayOfLines.join('\n');
}

function stripHtmlComments(str) {
  return str.replace(/<!--[\s\S]*?-->/g, ' ');
}

function stripHtmlTags(str) {
  'use strict';
  var arr = str.split('');
  var filterIsOn = false;
  var returnVal = [
  ];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '<') {
      filterIsOn = true;
      continue;
    } else if (arr[i] === '>') {
      returnVal.push(' ');
      filterIsOn = false;
      continue;
    } else if (filterIsOn === false) {
      returnVal.push(arr[i]);
    }
  }
  return returnVal.join('');
};

function stripLineBreaks(string) {
    return string.replace(/(\r\n|\n|\r)/gm, ' ');
};

function stripEmptyLines(str) {
  var arrayOfLines = str.match(/[^\r\n]+/g);
  var i;
  for(i = 0; i < arrayOfLines.length; i++) {
    if (arrayOfLines[i].trim() === '') arrayOfLines[i].trim();
  }
  return arrayOfLines.join('\n');
}

function stripDoubleSpaces(string) {
    return string.replace(/\s{2,}/g, ' ');
};

function uniqueWords(string) {
  var arr;
  var word;
  var returnArr;
  var i;

  // remove line breaks
  string = string.replace(/(\r\n|\n|\r)/gm, ' ');

  // split words
  arr = string.split(' ');

  // trim words
  for (word = 0; word < arr.length; word++) {
    arr[word] = arr[word].trim();
  }

  returnArr = [];
  for (i = 0; i < arr.length; i++) {
    // if the word in question does not exist in the array
    if (returnArr.indexOf(arr[i]) === -1) {
      returnArr.push(arr[i]);
    }
  }
  return returnArr.sort().join('\n');
}
