function sumOfSums(arr) {
  let sum = 0;
  for (let sub = 1; sub <= arr.length; sub++) {
    let subArr = arr.slice(0, sub);
    sum += subArr.reduce((acc, curr) => acc + curr, 0);
  }

  return sum;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));