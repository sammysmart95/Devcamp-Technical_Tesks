//QQ Write a function that takes a string and determines if the string is a palindrome.
//A palindrome is a word, number, phrase, or other sequence of characters which
//reads the same backward as forward, such as madam, racecar.
//The function should return “Yes” if the word is a palindrome and “No” if it isn’t.
//You are not to use the programming language’s existing function or method, if any.

const palindrome = (str) => {
  // first it split the string into an array of letters
  // second it reversed the array
  // third if joins / convert the array into a string
  let reversed = str.split("").reverse().join("");
  // it returns true if the passed string is strictlly equall to the reversed string, else false.
  return str === reversed;
};

console.log(palindrome("maam"));
