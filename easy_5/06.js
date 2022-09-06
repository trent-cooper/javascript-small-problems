function multiplicativeAverage(arr) {
  let multiply = arr.reduce((first, next) => first * next, 1);
  let average = (multiply / arr.length).toFixed(3);
  return average;
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"