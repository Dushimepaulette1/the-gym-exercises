//Write a function that counts the number of vowels (a, e, i, o, u) in a given string and returns that count.
//counting number of vowels in a string
//it must return the number of the vowel count
function countVowels(str) {
  vowelCount = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log(countVowels("eeuuooiiEE"));
