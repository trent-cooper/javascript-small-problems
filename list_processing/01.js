function sum(num) {
  return String(num).split('').reduce((first, next) => Number(first) + Number(next), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45