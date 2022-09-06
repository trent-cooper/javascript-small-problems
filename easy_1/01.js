// function isOdd (number) {
//   if (number % 2 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// Shortened 1 line version for practice:

let isOdd = (num) => num % 2 !== 0;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true