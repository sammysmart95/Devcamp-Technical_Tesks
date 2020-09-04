//QQ  Write a method to count the number of 3s that appear in all
// the numbers between 0 and n(inclusive).It should return an object
//containing the count of the number of 3s that appear and an array
//of the numbers that have 3s in them

// Example:
// Input: 35
// Output: { count: 10, numbers: [3, 13, 23, 30, 31, 32, 33, 34, 35] }

const countNum = (num) => {
  // this check if the number is 0 or a positive integer else throw an error
  if (!(num >= 0)) {
    throw new Error("Number must be 0 or any positive integer");
  }
  // a regular expression that checks if a number contains number 3
  let regxNum = /[3]+/;
  let newArr = [];
  // loop through the array and sellect the numbers that contains 3
  for (let i = 0; i < num; i++) {
    if (regxNum.test(i)) {
      newArr.push(i);
    }
  }

  // returns the length of the newArr and the array itself.
  return { count: newArr.length, numbers: newArr };
};

console.log(countNum(35));
