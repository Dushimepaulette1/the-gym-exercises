/*Create a function that takes an array of numbers and returns the sum of all the elements in the array.*/
//array of numbers []
//returns the sum
//loop the array
function sumArrays(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArrays([1, 2, 3, 3, 44, 5, 5]));
