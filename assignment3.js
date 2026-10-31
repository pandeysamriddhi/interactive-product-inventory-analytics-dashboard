// Assignment 3: Conditional Logic Implementation

const score = 85;

// 1) if...else: validate the score and pick a grade band
let band;
if (score < 0 || score > 100) {
  console.log("Invalid score! Must be between 0 and 100.");
} else if (score >= 90) {
  band = "A";
} else if (score >= 80) {
  band = "B";
} else if (score >= 70) {
  band = "C";
} else if (score >= 60) {
  band = "D";
} else {
  band = "F";
}

// 2) switch: map the band to the final letter grade
let grade;
switch (band) {
  case "A":
    grade = "A";
    break;
  case "B":
    grade = "B";
    break;
  case "C":
    grade = "C";
    break;
  case "D":
    grade = "D";
    break;
  case "F":
    grade = "F";
    break;
  default:
    grade = "N/A";
}

// 3) ternary: pass / fail (pass mark = 40)
const status = score >= 40 ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
