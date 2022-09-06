function sum(num) {
  return num.toString()
            .split('')
            .map(Number)
            .reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));