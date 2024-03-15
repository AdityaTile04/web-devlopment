let str = "apple";

if (str.length >= 3 && str[0] === "a") {
  console.log("Good");
} else {
  console.log("Not Good");
}

// Practice Question 2
let num = 12;

if (num % 3 === 0 && (num + 1 == 15 || num - 1 == 11)) {
  console.log("Safe");
} else {
  console.log("Unsafe");
}
