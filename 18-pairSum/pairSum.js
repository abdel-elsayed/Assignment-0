function pairSum(nums, target) {
  // Insert code here;
  let storage = new Set()
  

  if(nums.length <= 1){
    throw ("the array is of not enough length.")
  }

  for (i of nums){
    addend = target - i

    if (storage.has(addend))
      return true
    else
     storage.add(i)

  }

  return false
}
// Do not edit this line;
module.exports = pairSum;