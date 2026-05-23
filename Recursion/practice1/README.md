# Recursion Practice

This folder contains simple recursive examples for practice.

## Files

- `recursion.js` - contains:
  - `rSigma(num)` - recursively computes the sum of integers from 1 to `num` (truncates decimals, returns 0 for non-positive values).
  - `rFact(num)` - recursively computes factorial of `num` (truncates decimals, treats negative values as 0).
  - `floodFill(canvas2D, startXY, newColor)` - recursively fills adjacent same-colored pixels in a 2D array.

## Notes

- `rSigma(5)` returns `15`.
- `rSigma(2.5)` returns `3`.
- `rFact(6.5)` returns `720`.
- `floodFill` changes only directly adjacent pixels (up/down/left/right).
