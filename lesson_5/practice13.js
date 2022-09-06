let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function sumOdd(array) {
  let sum = 0;
  array.forEach(num => {
    if (num % 2 !== 0) {
      sum += num;
    }
  });
  return sum;
}

arr.sort((a, b) => {
  let aSum = sumOdd(a);
  let bSum = sumOdd(b);

  return aSum - bSum;
});


console.log(arr);