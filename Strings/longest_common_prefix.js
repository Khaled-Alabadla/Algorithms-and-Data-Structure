function longestCommenPrefix(words) {
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

console.log(longestCommenPrefix(["Khaled", "Khadija", "Khan Yunis"]));
