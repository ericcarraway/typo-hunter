function removeDuplicates(arr) {
  var returnArr = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (returnArr.indexOf(arr[i]) === - 1) {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
}
