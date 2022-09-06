// input: array w/ x3 subarrays of 3 elements
// output: new array w/ same structure

// rules:
//  input is always 3x3 array matrix
//  must not mutate original array (or it's sub arrays)

// algo:
//  slice/store each subarray in it's own row variable
//  use a loop that runs 3 times, w a nested x3 loop to push the first 
//  element of each row variable into a transposed row variable
//  return an object literal containing the new variables

function transpose(matrixArr) {
  let arr = matrixArr.slice();
  let returnArr = [[], [], []];

  for (let idx = 0; idx <= 2; idx++) {
    for (let idx2 = 0; idx2 <= 2; idx2++) {
      returnArr[idx].push(arr[idx2][idx]);
    }
  }
  return returnArr;
}


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]