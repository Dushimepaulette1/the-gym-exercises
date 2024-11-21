//average of 3 scores
//average is sum of the three scores/ 3
//must return the value associated with the grade
function getGrade(s1, s2, s3) {
  let sum = s1 + s2 + s3;
  let average = sum / 3;
  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(90, 100, 80));
