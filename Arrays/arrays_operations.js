/* 
1. Accessing Elements
    Create an array: let colors = ["red", "blue", "green", "yellow", "purple"];
    Print the first and last elements of the array.
    Print the element at the second position.
    Update the third element to orange and print the updated array.
*/
let colors = ["red", "blue", "green", "yellow", "purple"];

console.log(colors[0]);

console.log(console.log(1));

colors[2] = "orange";
console.log(colors);

console.log("=====================================");

/*  
2. Traversing an Array
  a. Given the array: let numbers = [10, 20, 30, 40, 50];, write a program to print each element using a for loop.
  b. Write a for loop to print the elements in reverse order.
*/
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

console.log("=====================================");

/*
3. Searching in an Array
  a. Write a program to check if the number 25 exists in the array: let nums = [5, 10, 15, 20, 25];.
    If it exists, print "Found at position X".
    If it doesn’t exist, print "Not Found".
*/
let nums = [5, 10, 15, 20, 25];
if (nums.includes(25)) {
  console.log("Found at position " + nums.indexOf(25));
} else {
  console.log("Not Found");
}

console.log("=====================================");

/*
4. Sorting an Array
  a. Write a program to sort the array: let scores = [50, 20, 70, 10, 40]; in:
    Ascending order
    Descending order
  b. Sort the array: let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"]; in alphabetical order.
*/
let scores = [50, 20, 70, 10, 40];
scores.sort((a, b) => a - b);
console.log("Ascending order: " + scores);

scores.sort((a, b) => b - a);
console.log("Descending order " + scores);

let names = ["Khaled", "Bilal", "Ali", "Ahmed", "Salah"];
console.log(names.sort());

console.log("=====================================");

/*
5. Inserting Elements
  a. Given the array: let animals = ["dog", "cat", "rabbit"];:
    Add "elephant" to the end of the array.
    Add "lion" to the beginning of the array.
    Insert "tiger" between "dog" and "cat".
*/
let animals = ["dog", "cat", "rabbit"];
animals.push("elephant");
animals.unshift("lion");
animals.splice(2, 0, "tiger");
console.log(animals);

console.log("=====================================");

/*
6. Deleting Elements
  a. Given the array: let fruits = ["apple", "banana", "cherry", "date"];:
    Remove the first element.
    Remove the last element.
    Remove "banana" from the array without using its index directly.
*/
let fruits = ["apple", "banana", "cherry", "date"];
fruits.shift();
fruits.pop();
fruits.splice(fruits.indexOf("banana"), 1);
console.log(fruits);

console.log("=====================================");

/*
7. Combining Arrays
  a. Given two arrays:
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
      Combine them into a single array.
      Print the combined array.
*/
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [...array1, ...array2];
console.log(array3);

console.log("=====================================");

/*
8. Splitting an Array
  a. Given the array: let items = ["a", "b", "c", "d", "e"];, split it into two arrays:
    The first three elements go into one array.
    The rest go into another array.
*/
let items = ["a", "b", "c", "d", "e"];
let first = items.slice(0, 3);
let second = items.slice(3);
console.log(second);

console.log("=====================================");

/*
9. Filtering Elements
  a. Given the array: let integers = [1, 5, 10, 15, 20, 25, 30];:
    Create a new array containing only integers greater than 15.
    Print the filtered array.
*/
let integers = [1, 5, 10, 15, 20, 25, 30];
let filteredArray = integers.filter((int) => int > 15);
console.log(filteredArray);

console.log("=====================================");

/*
10. Advanced Challenge
  a. Write a program to remove duplicate elements from an array.
    Example:
      Input: [1, 2, 2, 3, 4, 4, 5]  
      Output: [1, 2, 3, 4, 5]
  b. Write a program to rotate an array to the right by n positions.
    Example:
      Input: [1, 2, 3, 4, 5], n = 2  
      Output: [4, 5, 1, 2, 3]
*/
let elements = [1, 2, 2, 3, 4, 4, 5];
let uniqueElements = [];

elements.forEach((el) => {
  if (!uniqueElements.includes(el)) {
    uniqueElements.push(el);
  }
});

console.log(uniqueElements);

// another solution for a
// let uniqueElements = elements.filter((el, index) => {
//   return index == elements.indexOf(el);
// });

// console.log(uniqueElements);

let array = [1, 2, 3, 4, 5];
let n = 2;

let rightPart = array.slice(-n);

let leftPart = array.slice(0, nums.length - n);

let result = rightPart.concat(leftPart);

console.log(result);

// Another solution for b
// let removed = array.splice(-n);

// nums.unshift(...removed);

// console.log(array);

console.log("=====================================");

/*
Bonus Challenge
Write a program to merge two sorted arrays into a single sorted array without using the built-in sort() function.
  Example:
    Input: [1, 3, 5], [2, 4, 6]  
    Output: [1, 2, 3, 4, 5, 6]
*/
let a = [1, 3, 5];
let b = [2, 4, 6];
let mergedAndSortedArray = [];
let i = 0;
let j = 0;

while (i < a.length && j < b.length) {
  if (a[i] < b[j]) {
    mergedAndSortedArray.push(a[i])
    i++
  } else {
    mergedAndSortedArray.push(b[j])
    j++
  }
}

mergedAndSortedArray.push(...a.slice(i), ...b.slice(j))

console.log(i, j, mergedAndSortedArray)