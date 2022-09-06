function totalArea(arr) {
  return arr.reduce((acc, curr) => acc + (curr[0] * curr[1]), 0);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141