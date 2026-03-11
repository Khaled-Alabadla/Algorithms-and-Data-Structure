// Write a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("==================================");

// Write a for loop to print numbers from 10 to 1.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("==================================");

// Write a for loop to print all even numbers between 1 and 20.
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

console.log("==================================");

// Write a for loop to print all odd numbers between 1 and 20.
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// Write a for loop to calculate and print the sum of numbers from 1 to 10.
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("Sum of numbers from 1 to 10 is: " + sum);

console.log("==================================");

// FizzBuzz
for (let i = 1; i <= 30; i++) {
  if (i % 3 != 0 && i % 5 != 0) {
    continue;
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " - FizzBuzz");
  } else if (i % 5 == 0) {
    console.log(i + " - Buzz");
  } else if (i % 3 == 0) {
    console.log(i + " - Fizz");
  } else {
    console.log(i);
  }
}
