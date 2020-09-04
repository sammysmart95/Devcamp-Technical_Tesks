// QQ Write a function that takes an array of positive
// integers and calculates the standard deviation of the numbers.
// The function should return the standard deviation.

const standardD = (arr) => {
  // this check if all integers are positive else throw an error
  if (!arr.every((num) => num > 0)) {
    throw new Error("Array must contain only positive integers");
  }
  // this add up the array for calculating the mean
  let arrSum = arr.reduce((a, b) => a + b);
  // this calculate the mean of the array in 2 decimal place
  let mean = (arrSum / arr.length).toFixed(2);
  // declares difference of square
  let differnceSqur = [];

  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // quare(i - mean)
    //  this subtract the mean from each number and square the result
    // and add each to the
    differnceSqur.push(Math.pow(arr[i] - mean, 2));
  }
  // this sum the difference of square array
  let sumDeff = differnceSqur.reduce((a, b) => a + b);
  // calculate the standard deviation
  //using the formula od SD
  let standardDeviation = Math.sqrt(sumDeff / arr.length - 1).toFixed(2);
  // return result in 2 decimal place
  return standardDeviation;
};

console.log(standardD([1, 2, 3, 4, 5, 6, 7]));
