//removing vowels from a given string
//making sure it is lowercase
//loop through the string
//after finding the vowels remove them from the string
function shortcut(string) {
  let finalString = "";
  let vowels = "aeiou";
  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      finalString = finalString + string[i];
    }
  }
  return finalString;
}
console.log(shortcut("hello"));
