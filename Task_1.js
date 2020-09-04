// Q Write a function that takes an array of positive integers.
//The function should calculate the sum of all even and odd
//integers and return an array containing the sums.
//The first index in the returned array should hold
//the sum of the even integers and the second index
//should hold the sum of the odd integers.

// ================= STEP ONE ============
const sumOddAndEven = (arr) => {
  //  check if all the numbers in the array are positive integers
  if (!arr.every((num) => num > 0)) {
    // runs if there is a negative integer or zero
    return " Array must be positive integers only";
  } else {
    // runs if all are positive

    // even returns an array of only positive integers
    let even = arr.filter((num) => num % 2 === 0);

    // odd returns an array of only negative integers
    let odd = arr.filter((num) => num % 2 === 1);

    // evenNum add all the numbers in even array
    let evenNum = even.reduce((a, b) => a + b);

    // oddNNum add all the numbers in the negative array
    let oddNum = odd.reduce((a, b) => a + b);
    return [evenNum, oddNum];
  }
};
console.log(sumOddAndEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 25, 100]));

// ===================== STEP TWO =============

// This checks if a number is even or not
const checkEven = (num) => num % 2 === 0;

const oddAndEven = (arr) => {
  // check if arr the numbers in the array is positive
  if (!arr.every((num) => num > 0)) {
    return " Array must be positive integers only";
  }
  let even = [];
  let odd = [];
  // this loop through the array
  // if it passes the chechEven function stated above i is pushed to even array else odd array
  for (let i = 0; i < arr.length; i++) {
    checkEven(arr[i]) ? even.push(arr[i]) : odd.push(arr[i]);
  }

  // the add the numbers in the arrays
  let evenNum = even.reduce((a, b) => a + b);
  let oddNum = odd.reduce((a, b) => a + b);
  let newArr = [evenNum, oddNum];
  return newArr;
};
// console.log(oddAndEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 25, 100]));

// ================ STEP THREE =================

const EvenAndOdd = (arr) => {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] > 0)) {
      throw new Error("Array must contain positive integers only");
    }

    checkEven(arr[i]) ? (even += arr[i]) : (odd += arr[i]);
  }
  return (newArr = [even, odd]);
};
console.log(EvenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 25, 100]));
