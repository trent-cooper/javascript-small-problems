let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce));
console.log(produce);

function selectFruit(obj) {
  let fruitObj = {};
  for (const fruit in obj) {
    if (obj[fruit] === 'Fruit') {
      fruitObj[fruit] = obj[fruit];
    }
  }
  return fruitObj;
}