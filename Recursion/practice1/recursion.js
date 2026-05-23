function rSigma(num) {
  const n = Math.floor(num);
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return n + rSigma(n - 1);
}

function rFact(num) {
  let n = Math.floor(num);
  if (n < 0) n = 0;
  if (n <= 1) return 1;
  return n * rFact(n - 1);
}

function floodFill(canvas2D, startXY, newColor) {
  const [x, y] = startXY;
  const rows = canvas2D.length;
  if (rows === 0) return canvas2D;
  const cols = canvas2D[0].length;
  if (x < 0 || x >= cols || y < 0 || y >= rows) return canvas2D;

  const targetColor = canvas2D[y][x];
  if (targetColor === newColor) return canvas2D;

  function fill(cx, cy) {
    if (cx < 0 || cx >= cols || cy < 0 || cy >= rows) return;
    if (canvas2D[cy][cx] !== targetColor) return;

    canvas2D[cy][cx] = newColor;

    fill(cx + 1, cy);
    fill(cx - 1, cy);
    fill(cx, cy + 1);
    fill(cx, cy - 1);
  }

  fill(x, y);
  return canvas2D;
}

// Example usage
if (require.main === module) {
  console.log("rSigma(5) =", rSigma(5));
  console.log("rSigma(2.5) =", rSigma(2.5));
  console.log("rSigma(-1) =", rSigma(-1));

  console.log("rFact(3) =", rFact(3));
  console.log("rFact(6.5) =", rFact(6.5));
  console.log("rFact(-2) =", rFact(-2));

  const canvas2D = [
    [3, 2, 3, 4, 3],
    [2, 3, 3, 3, 2],
    [2, 3, 1, 3, 2],
    [2, 3, 3, 3, 2],
    [3, 2, 3, 2, 3],
  ];
  const result = floodFill(canvas2D, [2, 2], 1);
  console.log("floodFill result:");
  console.log(result.map((row) => row.join(" ")).join("\n"));
}

module.exports = { rSigma, rFact, floodFill };
