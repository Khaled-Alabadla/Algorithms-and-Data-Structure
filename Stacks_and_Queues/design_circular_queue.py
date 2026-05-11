class MyCircularQueue:
    """A fixed-size circular queue implemented with a list and two pointers."""

    def __init__(self, k):
        self._data = [0] * k
        self._capacity = k
        self._head = 0
        self._tail = 0
        self._size = 0

    def enqueue(self, value):
        if self._size == self._capacity:
            return False

        self._data[self._tail] = value
        self._tail = (self._tail + 1) % self._capacity
        self._size += 1
        return True

    def dequeue(self):
        if self._size == 0:
            return False

        self._head = (self._head + 1) % self._capacity
        self._size -= 1
        return True

    def Front(self):
        if self._size == 0:
            return -1
        return self._data[self._head]

    def Rear(self):
        if self._size == 0:
            return -1
        return self._data[(self._tail - 1) % self._capacity]

    def isEmpty(self):
        return self._size == 0

    def isFull(self):
        return self._size == self._capacity


if __name__ == "__main__":
    myCircularQueue = MyCircularQueue(3)
    print(myCircularQueue.enqueue(1))  # True
    print(myCircularQueue.enqueue(2))  # True
    print(myCircularQueue.enqueue(3))  # True
    print(myCircularQueue.enqueue(4))  # False
    print(myCircularQueue.Rear())      # 3
    print(myCircularQueue.isFull())   # True
    print(myCircularQueue.dequeue())   # True
    print(myCircularQueue.enqueue(4))  # True
    print(myCircularQueue.Rear())      # 4