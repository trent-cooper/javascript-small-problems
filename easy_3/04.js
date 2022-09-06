function findFibonacciIndexByLength(digitLength) {
  let oldNum = 1n;
  let currentNum = 1n;
  let index = 2n;

  while (String(currentNum).length < digitLength) {
    let fib = oldNum + currentNum;
    oldNum = currentNum;
    currentNum = fib;
    index++;
  }

  console.log(index);
}


findFibonacciIndexByLength(2n);
findFibonacciIndexByLength(3n);
findFibonacciIndexByLength(10n);
// findFibonacciIndexByLength(16n);
// findFibonacciIndexByLength(100n);
// findFibonacciIndexByLength(1000n);
// findFibonacciIndexByLength(10000n);

// The last example may take a minute or so to run.