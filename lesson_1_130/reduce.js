let numbers = [1, 2, 3, 4, 5];

function reduce(arr, func, accum) {
  let accumulator;
  let idx;
  if (accum) {
    accumulator = accum;
    idx = 0;
  } else {
    accumulator = arr[0];
    idx = 1;
  }

  for (idx; idx < arr.length; idx++) {
    accumulator = func(accumulator, arr[idx]);
  }
  return accumulator;
}

console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]