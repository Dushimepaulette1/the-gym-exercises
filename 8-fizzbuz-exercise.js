/*Write a program that prints the numbers from 1 to 20. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".*/
//prints numbers from 1 to 10
//multiples of 3 print "Fizz" instead of the number
//multiples of 5 print "Buzz"
//multiples of 3 and 5 print "FizzBuzz"
function multiples() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
multiples();
