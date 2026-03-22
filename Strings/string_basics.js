// Create a function that removes all spaces from a given string.
function removeBlanks(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      result += str[i];
    }
  }
  return result;
}

console.log(removeBlanks("Axsos academy is great !!"));

// Create a function that extracts and returns the digits from a given string as an integer.
function getDigits(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " " && !isNaN(Number(str[i]))) {
      result += str[i];
    }
  }
  return result;
}

console.log(getDigits("123abc456"));

// Create a function that converts a given string into its acronym. The acronym should consist of the first letter of each word, capitalized.
function acronym(str) {
  let words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      result += words[i][0].toUpperCase();
    }
  }
  return result;
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));

// Create a function that counts and returns the number of non-space characters in a given string.
function countNonSpaces(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      count++;
    }
  }
  return count;
}

console.log(countNonSpaces("Axsos academy is great"));

// Create a function that filters an array of strings, returning only those strings that have a length greater than or equal to a specified value.
function removeShorterStrings(arr, minLength) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= minLength) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeShorterStrings(["Axsos", "academy", "is", "great"], 4));
