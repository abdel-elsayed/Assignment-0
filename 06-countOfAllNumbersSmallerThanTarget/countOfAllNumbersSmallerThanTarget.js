function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  nums.sort();
  count = 0;

  while(nums[count] < target){
    count++;  
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;