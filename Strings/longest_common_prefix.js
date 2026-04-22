function longestCommonPrefix(words) {
  let common = words[0];

  for (let i = 1; i < words.length; i++) {
    while (common.length > 0) {
      if (words[i].includes(common)) {
        break;
      }
      common = common.slice(0, common.length - 1);
    }
  }

  return common;
}

console.log(longestCommonPrefix(["Khaled", "Khadija", "Khan Yunis"]));





























function longest(arr) {
  let result = ""
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j][i] != arr[0][i]) {
        return result.slice(0, i);
      }
    }
    result += arr[0][i]
  }
  return result
}
console.log("Result is", longest(["Khaled", "Khadija", "Khanyunis", "Kh"]))
