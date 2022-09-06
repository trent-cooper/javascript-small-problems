function multiplyAllPairs(arr1, arr2) {
  let fullArray = [];
  arr1.forEach(outerNum => {
    arr2.forEach(innerNum => {
      fullArray.push(outerNum * innerNum);
    });
  });
  return fullArray.slice().sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]