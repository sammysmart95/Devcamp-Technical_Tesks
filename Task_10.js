// QQ Write a function that takes a string.
//The function should calculate the character in the
//string with the most occurrences and return that character.
//If more than one character has the most occurrence, return those characters as an array.

// Example
// Input: “afhuusnimr443o0sggg”
// Output: “g”

const countCharacter = (str = "") => {
  let currentCount = 0;
  let result = "";
  for (var i = 0; i < str.length; i++) {
    let count = (str.match(new RegExp(str[i], "g")) || []).length;
    if (count > currentCount) {
      currentCount = count;
      result = str[i];
    }
  }
  return result;
};

console.log(countCharacter("afhuusnimr443o0sggg"));
