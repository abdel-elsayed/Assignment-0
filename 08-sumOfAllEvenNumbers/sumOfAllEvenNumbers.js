function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  i = 0
  count = 0
  for(i; i <= nums.length; i++){
     if (nums[i] % 2 == 0)
      count++
  }
  return count
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;