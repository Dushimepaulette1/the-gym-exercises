/*This is a function to Write a function that takes an array of strings and returns the longest string in the array.
If the array is empty, return null.
The array may contain strings of varying lengths.
If there are multiple strings with the same longest length, return the first one. */
function longestString(str) {
  if (str.length === 0) {
    return null;
  }
  let longString = str[0];
  for (let i = 1; i < str.length; i++) {
    // we start from 1 beacause our longest string has been initialised to the first element of the array
    if (str[i].length > longString.length) {
      longString = str[i];
    }
  }
  return longString;
}
console.log(longestString(["paulette", "tesi", "gloria"]));
