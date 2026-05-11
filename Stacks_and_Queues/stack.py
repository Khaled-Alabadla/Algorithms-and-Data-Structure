class Stack:
    """Simple LIFO stack implementation."""

    def __init__(self):
        self._items = []

    def push(self, value):
        """Push a value onto the stack."""
        self._items.append(value)

    def pop(self):
        """Remove and return the top value from the stack."""
        if self.empty():
            raise IndexError("pop from empty stack")
        return self._items.pop()

    def peek(self):
        """Return the top value without removing it."""
        if self.empty():
            raise IndexError("peek from empty stack")
        return self._items[-1]

    def empty(self):
        """Return True if the stack is empty."""
        return len(self._items) == 0

    def size(self):
        """Return the number of items in the stack."""
        return len(self._items)


if __name__ == "__main__":
    stack = Stack()
    stack.push(10)
    stack.push(20)
    print(stack.peek())  # 20
    print(stack.pop())   # 20
    print(stack.pop())   # 10
    print(stack.empty()) # True