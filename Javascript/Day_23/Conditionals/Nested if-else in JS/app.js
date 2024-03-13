// Nested if-else in JS:
// Nesting is writing if-else in side if-else statement.it can have many levels

// Example 1
let marks = 80;

if (marks >= 35) {
  console.log("Pass");
  if (marks >= 80) {
    console.log("Grade : Outstanding");
  } else {
    console.log("Grade : Good");
  }
} else {
  console.log("better luck next time");
}
