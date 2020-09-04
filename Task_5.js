// QQ Write a method to replace all spaces in a string with '%20'.
//Example
//Input: "Mr John Smith "
//Output: "Mr%20John%20Smith"

const hashPass = (str) => {
  // first it trim out excess space for the two end
  // second it split the string into an array of words
  // third it joins the array back to string and replace the spaces with %20
  return str.trim().split(" ").join("%20");
};

console.log(hashPass("Mr John Smith "));
