//Write a function that takes a string and returns the string reversed.
//takes a string as a parameter
//returns a string
//split the string
// loop thru the string
//reverse the string
//join the string back together
function reverseString(str) {
  let splittedStr = str.split("");
  let stringReversed = splittedStr.reverse();
  let wholeString = stringReversed.join("");
  return wholeString;
}
console.log(reverseString("paulette"));
