let fibTable = {
  1 : 1,
  2 : 1,
  3 : 2,
};

function fibonacci(nth) {
  if (fibTable.hasOwnProperty(nth)) {
    return fibTable[nth];
  }
  fibTable[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  return fibTable[nth];

}

console.log(fibonacci(12));
console.log(fibonacci(50));
