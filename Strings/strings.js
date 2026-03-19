// Write a function that takes a string and returns the same string in reverse order.
function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

console.log(reverseString("hello"));

// Write a function that counts how many vowels appear in a string. Use the vowels a, e, i, o, and u.
function countVowels(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    switch (char) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        count++;
        break;
      default:
        break;
    }
  }
  return count;
}

console.log(countVowels("hello"));

// Write a function that checks whether a string is a palindrome. A palindrome reads the same forward and backward.
function isPalindrome(str) {
  const chars = str.split("");

  let reversedArray = [];

  for (let i = chars.length - 1; i >= 0; i--) {
    reversedArray.push(chars[i]);
  }

  const reversedStr = reversedArray.join("");

  return str == reversedStr;
}

console.log(isPalindrome("madam"));

// Write a function that takes a sentence and returns the longest word in that sentence.
function findLongestWord(sentence) {
  const words = sentence.split(" ");

  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(findLongestWord("Axsos academy is great"));

// Write a function that takes a single-letter string grade and returns a matching feedback message.
function gradeFeedback(grade) {
  grade = grade.toUpperCase();
  let feedback = "";
  switch (grade) {
    case "A":
      feedback = "Excellent";
      break;
    case "B":
      feedback = "Good job";
      break;
    case "C":
      feedback = "You passed";
      break;
    case "D":
      feedback = "Need improvement";
      break;
    case "F":
      feedback = "Failed";
      break;
    default:
      feedback = "Invalid grade";
  }

  return feedback;
}
console.log(gradeFeedback("B"));

// Write a function that takes a string and counts how many characters are vowels, digits, spaces, and other characters.
function countCharacters(str) {
  let counts = {
    vowels: 0,
    digits: 0,
    spaces: 0,
    others: 0,
  };

  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    switch (true) {
      case vowels.includes(char):
        counts.vowels++;
        break;

      case char >= "0" && char <= "9":
        counts.digits++;
        break;

      case char === " ":
        counts.spaces++;
        break;

      default:
        counts.others++;
        break;
    }
  }

  return counts;
}

console.log(countCharacters("Hi 123!"));
