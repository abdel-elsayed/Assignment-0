function isPalindrome(word) {
  // Insert code here;
  let check = (word.length)/2;
  
  for(let i = 0; i < check; i++){
      if(word[i] != word[word.length-1-i]){
          return false;
      }
  }return true;
}

// Do not edit this line;
module.exports = isPalindrome;