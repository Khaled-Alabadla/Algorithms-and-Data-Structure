# Recursion Practice 2

This workspace contains recursive function practice code in `temp_zib_check.js`.

Implemented functions:

- `rFib(num)` — recursive Fibonacci with `num=0` and `num=1` as base cases.
- `rTrib(num)` — recursive Tribonacci using the first three values `0, 0, 1`.
- `ackermann(num1, num2)` — recursive Ackermann function for non-negative integer inputs.
- `Zibonacci(num)` — recursive Zibonacci sequence with memoization.
- `bestZibNum(target)` — finds the largest index whose Zibonacci value equals `target`.

## Notes

- Non-integer inputs are converted to integers using `Math.floor()`.
- Negative input values are handled gracefully.
