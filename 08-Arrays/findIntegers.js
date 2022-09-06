let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

// let integers = things.filter(num => Number.isInteger(num));
// console.log(integers);

//As a function:

let findIntegers = (arr) => {
  return arr.filter(num => Number.isInteger(num));  
};

let integers = findIntegers(things);
console.log(integers);