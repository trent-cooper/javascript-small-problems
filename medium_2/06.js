// input: integer
// output: integer


// algo:
//    pass num to count() function and return array of numbers
//    pass array to squareSum() and store return in variable
//    pass array to sumSquare() and store return in variable
//    find difference between values and return


function sumSquareDifference(num) {
  let numArr = count(num);

  let squareSum = calcSquareSum(numArr);
  let sumSquare = calcSumSquare(numArr);

  return squareSum - sumSquare;
}

function count(num) {
  let arr = [];

  for (let idx = 1; idx <= num; idx++) {
    arr.push(idx);
  }

  return arr;
}

function calcSquareSum(arr) {
  return (arr.reduce((acc, curr) => acc + curr, 0)) ** 2;
}

function calcSumSquare(arr) {
  return arr.reduce((acc, curr) => acc + (curr ** 2), 0);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150