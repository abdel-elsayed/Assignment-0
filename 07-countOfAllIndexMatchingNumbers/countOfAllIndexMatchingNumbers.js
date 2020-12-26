function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  i = 0
  count = 0
  for(i; i<=nums.length; i++){
    if (i === nums[i])
      count++
  }
  return count
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;