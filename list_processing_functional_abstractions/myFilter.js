function myFilter(array, func) {
  let returnArr = [];
  for (let idx = 0; idx < array.length; idx++) {
    if (func(array[idx], idx, array)) {
      returnArr.push(array[idx]);
    }
  }

  return returnArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]