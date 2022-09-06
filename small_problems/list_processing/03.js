function multiplyAllPairs(arr1, arr2) {
  let resultArr = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      resultArr.push(num1 * num2);
    })
  })

  return resultArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));