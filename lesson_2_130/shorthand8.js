// "use strict";

// function stringToObj(arr) {
//   return {
//     first: arr.shift(),
//     last: arr.pop(),
//     middle: arr,
//   }
// }

// let { first, last, middle } = stringToObj(['one', 'two', 'three', 'four', 'five']);

// console.log(first);
// console.log(last);
// console.log(middle);


// or


"use strict";

function stringToObj(first, ...rest) {
  return {
    first,
    last: rest.pop(),
    middle: rest,
  }
}

let arr = ['one', 'two', 'three', 'four', 'five'];
let { first, last, middle } = stringToObj(...arr);

console.log(first);
console.log(last);
console.log(middle);