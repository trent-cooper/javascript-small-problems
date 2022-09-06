// function substrings(str) {
//   let arr = [];

//   for (let idx = 0; idx < str.length; idx++) {
//     for (let count = 1; count <= str.length - idx; count++) {
//       arr.push(str.substr(idx, count));
//     }
//   }

//   return arr;
// }

// console.log(substrings('abcde'));


function substringsArr(str) {
  return str.split('').map((_, idx, arr) => {
    return arr.slice(idx).map((_, idx2, arr2) => {
      return arr2.slice(0, idx2 + 1)
                 .join('');
    });
  }).flat();
}

console.log(substringsArr('abcde'));