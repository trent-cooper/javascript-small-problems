function merge(arr1, arr2) {
  let newArr = [...arr1, ...arr2].sort((a, b) => {
    return a - b;
  });

  console.log(newArr);

}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]