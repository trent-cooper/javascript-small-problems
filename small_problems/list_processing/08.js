function buyFruit(arr) {
  let arrList = [];
  arr.forEach(item => {
    let count = 0;
    while (count < item[1]) {
      arrList.push(item[0])
      count++
    }
  });

  return arrList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));