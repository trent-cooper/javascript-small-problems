function average(arr) {
  let sum = arr.reduce((first, next) => first + next, 0);
  let averageValue = sum / arr.length;
  return Math.floor(averageValue);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40