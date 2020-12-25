function countOfAllBooleans(arr) {
  // Insert code here;
  //arr = [true, false, true, false, true];
  count = 0
  for (value in arr){
    if (arr[value] === true || arr[value] === false)
      count++;
  }
  return count
}

// Do not edit this line;
module.exports = countOfAllBooleans;