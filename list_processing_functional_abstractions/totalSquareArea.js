function totalSquareArea(arr) {
  let filterArr = arr.filter(ele => ele[0] === ele[1]);
  return filterArr.reduce((acc, curr) => acc + (curr[0] * curr[1]), 0);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121