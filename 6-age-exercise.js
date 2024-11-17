/* Write a program that asks the user for their age and prints whether they are a minor (under 18) or an adult (18 or older). */
// asks a user for their age
//prints minor if under 18(less than 18)
// prints adult if older than 18 (greater than 18)
function ageChecker() {
  let age = prompt("How old are you?");
  age = Number(age); //making sure age is a number by converting it to  a number
  if (isNaN(age)) {
    console.log("enter valid age please!!!");
  }
  if (age < 18) {
    console.log("minor");
  } else if (age >= 18) {
    console.log("adult");
  }
}
ageChecker();
