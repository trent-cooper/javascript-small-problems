function multiplyList(arr1, arr2) {
  let multiplyArr = [];
  let counter = 0;

  while (counter < arr1.length) {
    multiplyArr.push(arr1[counter] * arr2[counter]);
    counter++;
  }

  return multiplyArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]