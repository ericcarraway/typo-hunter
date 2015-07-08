var removeDuplicates = function(str) {
  var arr = str.split(' ');
  var returnArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (returnArr.indexOf(arr[i]) == - 1) {
      returnArr.push(arr[i]);
    }
  } 
  return returnArr.sort().join(' ');
}

