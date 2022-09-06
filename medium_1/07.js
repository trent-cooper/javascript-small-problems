function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  let previousNum = 1;
  let currentNum = 1;
  let result;
  for (let count = 3; count <= nth; count++) {
    result = currentNum + previousNum;
    previousNum = currentNum;
    currentNum = result;
  }

  return result;
}

console.log(fibonacci(20));
