// QQ Write a function that takes two parameters, an array and some number.
//The function should determine whether any three numbers in the array
//add up to the number.If it does, the function should return the numbers
//as an array.If it doesn’t, the function should return -1.

// Example
// Input: [1, 2, 3, 4, 5, 6], 6
// Output: [1, 2, 3]

// this iitialize an array and the final number
const sumValuesTo = (arr = [], sum = 0) => {
  // this loop through the array to find the first number
  for (var i = 0; i < arr.length; i++) {
    // this loop through the array to find the second number
    for (var j = i + 1; j < arr.length; j++) {
      // this loop through the array to find the third number
      for (var k = j + 1; k < arr.length; k++) {
        // if the three numbers is = to the given total
        // return the numbers in an array
        if (arr[i] + arr[j] + arr[k] === sum) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  // return if no three numbers sum to get the total
  return -1;
};
console.log(sumValuesTo([1, 2, 3, 4, 5, 6], 6));
