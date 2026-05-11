class MyQueue:
    """Queue implemented using two stacks to preserve FIFO order."""

    def __init__(self):
        self._in_stack = []
        self._out_stack = []

    def push(self, x):
        """Push element x to the back of the queue."""
        self._in_stack.append(x)

    def _move_in_to_out(self) -> None:
        """Move elements from in-stack to out-stack when needed."""
        if not self._out_stack:
            while self._in_stack:
                self._out_stack.append(self._in_stack.pop())

    def pop(self):
        """Removes the element from the front of the queue and returns it."""
        self._move_in_to_out()
        return self._out_stack.pop()

    def peek(self):
        """Returns the element at the front of the queue."""
        self._move_in_to_out()
        return self._out_stack[-1]

    def empty(self):
        """Returns true if the queue is empty, false otherwise."""
        return not self._in_stack and not self._out_stack


if __name__ == "__main__":
    myQueue = MyQueue()
    myQueue.push(1)
    myQueue.push(2)
    print(myQueue.peek())  # 1
    print(myQueue.pop())   # 1
    print(myQueue.empty()) # False