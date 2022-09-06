function buyFruit(arr) {
  let fruitArr = [];
  arr.forEach(subArr => {
    for (let idx = 1; idx <= subArr[1]; idx++) {
      fruitArr.push(subArr[0]);
    }
  });
  return fruitArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]