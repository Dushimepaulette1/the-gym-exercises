/*Use the array's forEach() method(opens in a new tab) to loop over the following array and add 100 to each of the values if the value is divisible by 3.
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];*/
let test = [
  12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148,
  169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139,
];
test.forEach(function (num) {
  if (num % 3 === 0) {
    num = num + 100;
  }
  console.log(num);
});
//if we wat to update the test arrays
/*we can put two parameters num and index 
then test[index] = num + 100
then we console.log (test)*/
