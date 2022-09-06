// let factorial = (n) => {
//   let store = 1;
//   for (let i = n; i > 0; i--) {
//     store *= i;
//   }
//   return store;
// }

//--------------

// let factorial = (n) => {
//   let store = 1;
//   for (let i = 1; i <= n; i++) {
//     store *= i;
//   }
//   return store;
// }

// console.log(factorial(5));

//---------------

let store = 1;

let factorial = (n) => {
  if (n === 1) return store;
  store *= n;
  return factorial(n - 1);

}

console.log(factorial(4));