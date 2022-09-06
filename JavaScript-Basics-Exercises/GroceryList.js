let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

let checkOff = (array) => {
  while (array.length > 0) {
    console.log(array.shift());
  }
}

checkOff(groceryList);

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []