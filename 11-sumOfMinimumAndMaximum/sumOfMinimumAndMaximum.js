function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  nums.sort
  sum = nums[0] + nums[nums.length - 1]
  return sum
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;