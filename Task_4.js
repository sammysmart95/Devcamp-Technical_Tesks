// Create a password validator function that takes in the
//password as its argument and returns an integer value you can
//evaluate to determine the password strength.Using the following validators:

// 0 -> very weak e.g. a password with only strings
// 1 -> weak e.g. a password with only numbers
// 2 -> strong e.g. a password containing strings and numbers
// 3 -> very strong e.g. a password containing strings, numbers and special characters (!,@,#,$,%, etc)

// A regular expression that check for only string and return true or false
const checkOnlyStr = (str) => {
  let regxAalapha = /^[A-Za-z]+$/;
  return regxAalapha.test(str);
};

// A regular expression that check for only numbers and return true or false
const checkOnlyNum = (num) => {
  let regxNum = /^[0-9]+$/;
  return regxNum.test(num);
};

// A regular expression that check for only strings and numbers and return true or false
const checkStrNum = (str) => {
  let regxStrNum = /^[A-Za-z0-9]+$/;
  return regxStrNum.test(str);
};

// A regular expression that check for all characters and return true or false
const mixChar = (str) => {
  let regxMixChar = /^[A-Za-z0-9!@#$%&*_-]+$/;
  return regxMixChar.test(str);
};

const passValidator = (args) => {
  // return 0 -> very weak password
  if (checkOnlyStr(args)) {
    return 0;
  }
  // return 1 -> weak password
  if (checkOnlyNum(args)) {
    return 1;
  }
  // return 2 -> strong password
  if (checkStrNum(args)) {
    return 2;
  }
  // return 3 -> very strong password
  if (mixChar(args)) {
    return 3;
  }
};

console.log(passValidator("sam"));
console.log(passValidator(1234));
console.log(passValidator("sam123"));
console.log(passValidator("samq123!@#"));
