let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(array => {
  if (typeof array[0] === 'number') {
    return array.slice().sort((a, b) => a - b);
  } else {
    return array.slice().sort();
  }
});

console.log(arr);
console.log(newArr);