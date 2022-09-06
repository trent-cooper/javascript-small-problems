// input: array matrix
// output: new array matrix

// 1 5 8   3 4 1
// 4 7 2   9 7 5
// 3 9 6   6 2 8


function rotate90(matrixArr) {
  let arr = matrixArr.slice();
  let returnArr = [];

  for (let idx = 0; idx < arr[0].length; idx++) {
    returnArr.push([]);
  }

  for (let idx = 0; idx < arr[0].length; idx++) {
    for (let idx2 = arr.length - 1; idx2 >= 0; idx2--) {
      returnArr[idx].push(arr[idx2][idx]);
    }
  }
  return returnArr;
}


let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]