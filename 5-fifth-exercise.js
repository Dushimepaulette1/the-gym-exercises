/*Write a function that takes two parameters (a string and a number) and returns the string repeated the given number of times.*/
//takes two parameters string and a number
//returns a string reapeted a number of times
function reapetedString(str, num) {
  if (typeof str !== "string" || typeof num !== "number" || num < 0) {
    return "Not a valid number or string";
  }
  return str.repeat(num);
}
console.log(reapetedString("joyce", 5));
