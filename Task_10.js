// QQ Write a function that takes a string.
//The function should calculate the character in the
//string with the most occurrences and return that character.
//If more than one character has the most occurrence, return those characters as an array.

// Example
// Input: “afhuusnimr443o0sggg”
// Output: “g”

const mostOccured = (str) => {
  let splitStr = str.split("");
  let count = 0;
  let value = "";
  for (index in splitStr) {
    let include = str.indexOf(splitStr[index]);
    while (include !== -1) {
      count++;
      include = str.indexOf(splitStr[index], include + 1);
      // console.log(include);
    }
  }
  return count;
};

console.log(mostOccured("mummy"));
