function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let answer = new Set()

  for (x of args){
    for (i of x){
      if(!answer.has(i))
        answer.add(i)
    }
  }

  return answer
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;