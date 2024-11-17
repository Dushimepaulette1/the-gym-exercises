/*Create a function called isEven that takes a number as an argument and returns true if the number is even, and false if it's odd.*/

//takes a number as an argument
//true if number is even
// a number is even when if that number % 2 is 0
//false if number is odd
// odd when the number % 2 !== 0
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else if (number % 2 !== 0) {
    return false;
  }
}
console.log(isEven(66));
