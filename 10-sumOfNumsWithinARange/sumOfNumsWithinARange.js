function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  count =0;
  i = 0;
  for(i; i <= nums.length;i++ ){
    if (nums[i] >= start && nums[i] <= end ){
      count++;
    }
  }
  return count
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;