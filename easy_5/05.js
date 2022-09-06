function interleave(arr1, arr2) {
  let newArr = [];
  let counter = 0;

  while (counter < arr1.length) {
    newArr.push(arr1[counter]);
    newArr.push(arr2[counter]);
    counter++;
  }

  return newArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]