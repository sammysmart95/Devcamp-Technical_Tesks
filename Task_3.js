// QQ  Write a function that accepts an array of positive integers
// and returns an array of all prime numbers from the given array.
// A prime number is a number that is only divisible by 1 and itself.

// This check if a number is prime from Task_2
const checkIfPrime = (num) => {
  if (!(num > 0)) {
    throw new Error("Prime number must be a positive integer");
  }
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// This function takes an array of numbers
const primeNum = (arr) => {
  let prime = [];
  // This loop through the array
  for (let i = 0; i < arr.length; i++) {
    // This throw a an error if array contain any negative integer
    if (!(arr[i] > 0)) {
      throw new Error("Array must contain only positive integers");
    }
    // check if each integer is prime or not
    // if prime add to prime array
    checkIfPrime(arr[i]) ? prime.push(arr[i]) : "";
  }
  // return all the prime numbers in a new array
  return prime;
};

console.log(primeNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 15, 21, 31, 87]));
