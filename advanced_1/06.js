//input: array (1 layer)
//output: new array (1 layer)

function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}


function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let breakpoint = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, breakpoint);
  let lastHalf = arr.slice(breakpoint);
  firstHalf = mergeSort(firstHalf);
  lastHalf = mergeSort(lastHalf);

  console.log(firstHalf);
  console.log(lastHalf);


  return merge(firstHalf, lastHalf);
}

console.log(mergeSort([9, 5, 7, 1]));