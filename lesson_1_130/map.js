let numbers = [1, 2, 3, 4, 5];

function map(arr, func, thisArg) {
  let mappedArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    mappedArr.push(func.call(thisArg, arr[idx]));
  }
  return mappedArr;
}

console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]