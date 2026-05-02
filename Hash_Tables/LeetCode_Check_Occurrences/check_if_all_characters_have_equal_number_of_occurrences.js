let word = 'Khaled'

function check_if_all_characters_have_equal_number_of_occurrences(word) {
  const freq = {}
  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    freq[char] = (freq[char] || 0) + 1
  }

  let counts = Object.values(freq)
  let first = counts[0]
  return counts.every(count => count == first)
}

console.log(check_if_all_characters_have_equal_number_of_occurrences('abacbc'))