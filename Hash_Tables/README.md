# Hash Table Implementation

## Overview

This is a simple HashMap implementation using **Separate Chaining** collision resolution. It provides basic key-value pair storage and retrieval operations.

## Implementation Details

### Data Structure

- **Table Size**: 2069 (a prime number for better key distribution)
- **Collision Resolution**: Separate Chaining (each bucket stores a list of key-value pairs)
- **Hash Function**: Uses the formula `(key * 31) % size`

### Supported Operations

#### `put(key: int, value: int)`

Inserts or updates a key-value pair in the hash map.

- If the key already exists, its value is updated
- If the key doesn't exist, a new key-value pair is added

#### `get(key: int) -> int`

Retrieves the value associated with a given key.

- Returns the value if the key exists
- Returns `-1` if the key does not exist

#### `remove(key: int)`

Removes a key and its associated value from the hash map.

- Finds the key in its bucket and removes it
- Does nothing if the key doesn't exist

#### `_get_hash(key: int) -> int` (Private)

Internal hash function that computes the bucket index for a given key.

## Time Complexity

| Operation | Average Case | Worst Case |
| --------- | ------------ | ---------- |
| Put       | O(1)         | O(n)       |
| Get       | O(1)         | O(n)       |
| Remove    | O(1)         | O(n)       |

- **Average case**: O(1) when collisions are minimal
- **Worst case**: O(n) when all keys hash to the same bucket

## Usage Example

```python
# Create a new hash map
my_map = MyHashMap()

# Insert key-value pairs
my_map.put(1, "one")
my_map.put(2, "two")
my_map.put(3, "three")

# Retrieve values
print(my_map.get(1))  # Output: "one"
print(my_map.get(5))  # Output: -1 (key doesn't exist)

# Update a value
my_map.put(1, "ONE")
print(my_map.get(1))  # Output: "ONE"

# Remove a key
my_map.remove(1)
print(my_map.get(1))  # Output: -1
```
