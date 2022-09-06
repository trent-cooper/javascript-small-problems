function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);

}

console.log(fibonacci(12));

// function sum(num) {
//   if ( num === 1) {
//     return 1;
//   }
//   return num + sum(num - 1);
// }

// console.log(sum(10));