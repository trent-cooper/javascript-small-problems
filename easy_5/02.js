function union(arr1, arr2) {
  let newArr = [];

  [...arr1, ...arr2].forEach(num => {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  });

  console.log(newArr);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]