function rFib(num) {
  num = Math.floor(num);
  if (num <= 0) return 0;
  if (num === 1) return 1;

  return rFib(num - 1) + rFib(num - 2);
}

function rTrib(num) {
  num = Math.floor(num);
  if (num <= 1) return 0;
  if (num === 2) return 1;

  return rTrib(num - 1) + rTrib(num - 2) + rTrib(num - 3);
}

function ackermann(num1, num2) {
  num1 = Math.floor(Math.max(0, num1));
  num2 = Math.floor(Math.max(0, num2));

  if (num1 === 0) {
    return num2 + 1;
  }
  if (num2 === 0) {
    return ackermann(num1 - 1, 1);
  }
  return ackermann(num1 - 1, ackermann(num1, num2 - 1));
}

const zibCache = { 0: 1, 1: 1, 2: 2 };

function Zibonacci(num) {
  num = Math.floor(num);
  if (num < 0) return 0;
  if (zibCache[num] !== undefined) return zibCache[num];

  let result;
  if (num % 2 !== 0) {
    const n = (num - 1) / 2;
    result = Zibonacci(n) + Zibonacci(n - 1) + 1;
  } else {
    const n = num / 2;
    result = Zibonacci(n) + Zibonacci(n + 1) + 1;
  }

  zibCache[num] = result;
  return result;
}

console.log("Zibonacci(10) =", Zibonacci(10));
console.log("Zibonacci(100) =", Zibonacci(100));

function bestZibNum(target) {
  let bestIndex = null;

  for (let i = 0; i < 10000; i++) {
    if (Zibonacci(i) === target) {
      bestIndex = i;
    }
  }

  return bestIndex;
}

console.log("bestZibNum(3186) =", bestZibNum(3186));
console.log("bestZibNum(3183) =", bestZibNum(3183));
