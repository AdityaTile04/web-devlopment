// else if statement in JS

// Exapmle 1

let marks = 85;

if (marks > 80) {
  console.log("A+");
} else if (marks >= 60) {
  console.log("A");
} else if (marks >= 50) {
  console.log("B");
} else if (marks <= 30) {
  console.log("F");
}

// Example 2

let season = "august";

if (season === "january") {
  console.log("Winter is here");
} else if (season === "april") {
  console.log("Summer is here");
} else if (season === "august") {
  console.log("Rainy season is here");
}

// Example 3

let classAttd = 76;

if (classAttd > 75) {
  console.log("You are eligible for exam ");
} else if (classAttd < 75) {
  console.log("You are not eligible for exam ");
}

// Example 4

let cgpa = 8.5;

if (cgpa >= 7.5) {
  console.log("You are selected for placements");
} else if (cgpa <= 7) {
  console.log("Better luck next time");
}
