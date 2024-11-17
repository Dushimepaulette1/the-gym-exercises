//Write a function that takes an array of numbers and returns an array with only the even numbers.
//solution
//takes an array of numbers
//returns an array with even numbers
//even numbers are numbers which are divisible by 2

function evenNumbersArray(number) {
  if (number.length === null) {
    return null;
  }
  let arr = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      arr.push(number[i]);
    }
  }
  return arr;
}
console.log(evenNumbersArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
