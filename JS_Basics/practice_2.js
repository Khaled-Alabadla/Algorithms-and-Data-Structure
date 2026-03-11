// Write a program that checks if a number is positive or negative.
let number = 5;

if (number > 0) {
  console.log(number + " is a positive number");
} else if (number < 0) {
  console.log(number + " is a negative number");
} else {
  console.log(number + " is neither positive nor negative");
}

// Write a program that prints "Good morning" if the time is less than 12 and "Good afternoon" otherwise.
let time = "11";

if (time < 12) {
  console.log("Good morning");
} else if (time > 12) {
  console.log("Good afternoon");
} else {
  console.log("Good morning and afternoon and evening 😅");
}

// Write a program that assigns grades based on scores.
let score = 90;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}

console.log("Your grade is " + grade);

// Write a program that takes a day of the week and prints whether it’s a weekday or weekend.
let day = "Tuesday";

switch (day) {
  case "Saturday":
    console.log("Weekday");
    break;
  case "Sunday":
    console.log("Weekday");
    break;
  case "Monday":
    console.log("Weekday");
    break;
  case "Tuesday":
    console.log("Weekday");
    break;
  case "Wednesday":
    console.log("Weekday");
    break;
  case "Thirsday":
    console.log("Weekday");
    break;
  case "Friday":
    console.log("Weekend");
    break;
}
