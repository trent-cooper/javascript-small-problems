function transpose(matrixArr) {
  let arr = matrixArr.slice();
  let returnArr = [];

  for (let idx = 0; idx < arr[0].length; idx++) {
    returnArr.push([]);
  }

  for (let idx = 0; idx < arr[0].length; idx++) {
    for (let idx2 = 0; idx2 < arr.length; idx2++) {
      returnArr[idx].push(arr[idx2][idx]);
    }
  }
  console.log(returnArr);
}

// const matrix = [
//   [1, 5, 8, 5],
//   [4, 7, 2, 0],
//   [3, 9, 6, 1]
// ];

// let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
// console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

// transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
// transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
// transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]