function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  count = 0
  for (value in arr){
    if(typeof arr[value] === 'string' || typeof arr[value] === 'boolean')
      count++

  }
  return count
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;