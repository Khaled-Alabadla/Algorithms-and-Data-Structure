# Check if All Characters Have Equal Number of Occurrences

This is a JavaScript function that checks whether all characters in a given word have the same number of occurrences.

## Function

```javascript
function check_if_all_characters_have_equal_number_of_occurrences(word)
```

### Parameters

- `word` (string): The input word to check.

### Returns

- `boolean`: Returns `true` if all characters have equal occurrences, otherwise `false`.

## Example

```javascript
console.log(check_if_all_characters_have_equal_number_of_occurrences("abacbc")); // true
console.log(check_if_all_characters_have_equal_number_of_occurrences("aaabb")); // false
```

## How it works

The function uses a frequency map to count occurrences of each character, then checks if all counts are equal.
