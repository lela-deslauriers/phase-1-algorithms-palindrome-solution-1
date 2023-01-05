function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  let reversedWord = reverseString(word);

  return reversedWord === word;
}

/* 
  Add your pseudocode here
    reverse the input string

    if the reversed string is the same as the input
      return true
    else
      return false
*/

/*
  Add written explanation of your solution here
  Create 2 functions, one of them a helper function with the job of reversing the string with method chaining and returning it. 
  The main function assigns a variable to the output of the helper function. 
  Then we use the === operator to return true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
