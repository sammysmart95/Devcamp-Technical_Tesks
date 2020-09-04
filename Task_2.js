//Q Write a function that accepts a positive integer and determines
//if it is a prime number.The function should return true,
//if it is a prime number or false if it isn’t.

const checkIfPrime = (num) => {
  // check if num is a positive integer
  //
  if (!(num > 0)) {
    throw new Error("Prime number must be a positive integer");
  }

  // 1 is not a prime number
  if (num === 1) {
    return false;
  }

  // loop through the number
  // divid the number starting from 2 to a number less than that number
  // if remender = 0 return false
  // if all pass return true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(checkIfPrime(8));
console.log(checkIfPrime(9));
console.log(checkIfPrime(12));
console.log(checkIfPrime(11));
console.log(checkIfPrime(14));
console.log(checkIfPrime(15));
console.log(checkIfPrime(31));
