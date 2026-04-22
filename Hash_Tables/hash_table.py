class MyHashMap:
    """
    A simple HashMap implementation using Separate Chaining
    """

    def __init__(self):
        # We use a prime number for the size to help distribute keys better
        self.size = 2069
        # Create a list of lists
        self.table = [[] for i in range(self.size)]

    def _get_hash(self, key: int) -> int:
        """
        Simple hash function: multiplies key by a prime and takes modulo
        """
        return (key * 31) % self.size

    def put(self, key: int, value: int) -> None:
        """
        Inserts or updates a key-value pair.
        """
        index = self._get_hash(key)
        bucket = self.table[index]
        
        # Check if the key already exists to update its value
        for i in range(len(bucket)):
            if bucket[i][0] == key:
                bucket[i] = (key, value)
                return
        
        # If key was not found in the loop, add it to the bucket
        bucket.append((key, value))

    def get(self, key: int) -> int:
        """
        Returns the value for the key, or -1 if it doesn't exist
        """
        index = self._get_hash(key)
        bucket = self.table[index]
        
        # Look through the bucket for the key
        for pair in bucket:
            if pair[0] == key:
                return pair[1]
        
        return -1

    def remove(self, key: int) -> None:
        """
        Removes the key and its value from the map
        """
        index = self._get_hash(key)
        bucket = self.table[index]
        
        # Find the position of the key in the bucket
        for i in range(len(bucket)):
            if bucket[i][0] == key:
                # Remove the item at this position
                bucket.pop(i)
                return