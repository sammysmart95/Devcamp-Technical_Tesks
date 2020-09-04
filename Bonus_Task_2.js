// QQ This challenge	 asks you to take a string composed of only
//lowercase letters and space characters, for	 example, “hello world”
//and replace every consonant in the string with the next consonant in the alphabet.
//So in the above example, the output should be “jemmo xosmf” and you can see
//that we left every vowel in place and only changed the consonants.
//You should notice that the last letter changed was from “d” to “f”
//and not from “d” to “e” because “e” is a vowel.

// declare the cowels
let vowel = "aeiou";

// the check if a letter that will be passed is included in the vowel..
const isVowel = (letter) => vowel.indexOf(letter) !== -1;

// declares the function that takes a string and change consonant letters
const replaceConsonants = (word) => {
  // split the string into array
  let wordArr = word.split("");

  // iterate through the word
  for (index in wordArr) {
    // checks if letter is not a vowel and not a space
    if (!isVowel(wordArr[index]) && wordArr[index] !== " ") {
      // if letter is the last consonant it change to the first consonant
      if (wordArr[index] === "z") {
        wordArr[index] = "b";
      } else {
        // if its not the last consonant
        // the consonant is replaced with the next consonant
        // The charCodeAt() method returns an integer between 0 and 65535
        // representing the UTF - 16 code unit at the given index.

        // word.charCodeAt(index) returns the index of its position
        // +1 take it to the next index

        // The static String.fromCharCode() method returns a string
        //created from the specified sequence of UTF - 16 code units.

        // therefore String.fromCharCode() takes the index and return the letter of that index
        wordArr[index] = String.fromCharCode(word.charCodeAt(index) + 1);

        // if the next letter its going to is a vowel, it move twice
        if (isVowel(wordArr[index])) {
          wordArr[index] = String.fromCharCode(word.charCodeAt(index) + 2);
        }
      }
    }
  }
  // join the array of letters back to string
  return wordArr.join("");
};

console.log(replaceConsonants("hello world"));
