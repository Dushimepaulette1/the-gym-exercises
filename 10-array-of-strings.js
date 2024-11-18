/* Write a function that takes an array of strings and returns a new array with only the strings that have more than 5 characters.*/
//array of strings
//returns a new array of strings with characters greater than 5
function arrayOfStrings(arr) {
  fiveStrings = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      fiveStrings.push(arr[i]);
    }
  }
  return fiveStrings;
}
console.log(arrayOfStrings(["apple", "banana", "kiwi", "strawberry"]));
