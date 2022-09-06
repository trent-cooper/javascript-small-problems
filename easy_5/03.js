function halvsies(arr) {
  let arr1 = [];
  let arr2 = [];
  let length = Math.ceil(arr.length / 2);
  let counter = 1;

  arr.forEach(num => {
    if (counter <= length) {
      arr1.push(num);
      counter++;
    } else {
      arr2.push(num);
    }
  });

  return [arr1, arr2];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]