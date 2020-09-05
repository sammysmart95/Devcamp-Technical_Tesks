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
  // iterate through the string
  for (var i = 0; i < str.length; i++) {
    // this line uses a regular expression to match the length of each  letter globlally

    let count = (str.match(new RegExp(str[i], "g")) || []).length;
    // if a letter is greater than the current count
    if (count > currentCount) {
      // current count is assign to count
      currentCount = count;
      // the highest count is assign to result
      result = str[i];
    }
  }
  // the highest occuring letter is returned
  return result;
};

console.log(countCharacter("afhuusnimr443o0sggg"));
