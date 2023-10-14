function isPalindrome(word) {
  let Nword = ''
  for(let i = word.length - 1; i >= 0;i--){
    Nword += word[i]

  }
  return Nword === word
}

/* 
   iterate over each letter of the string:
  initialize empty string called Nword
	      push the last letter to the new string       
  check if the word equals the new word:
*/

/*
  Add written explanation of your solution here
  we need a function that check if the string it takes can be read from first to last and from last to first with the same word 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("tamat"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("rubber"));

}

module.exports = isPalindrome;
