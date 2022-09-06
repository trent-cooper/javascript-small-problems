function myOwnEvery(array, func) {
  for (let idx = 0; idx < array.length; idx++) {
    if (!func(array[idx], idx, array)) {
      return false;
    }
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true


//////

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false