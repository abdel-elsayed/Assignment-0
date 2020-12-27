function frequencyCounter(word) {
  // Insert code here;
  count = {};
  i = 0
  for (i; i < word.length; i++){
    if(count[word[i]])
      count[word[i]]++
    else 
      count[word[i]] = 1;
  }
  return count;
}

// Do not edit this line;
module.exports = frequencyCounter;