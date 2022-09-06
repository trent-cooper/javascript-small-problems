function oddities(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 2) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//Further Exploration:

function evens(array) {
  return array.filter(element => array.indexOf(element) % 2 === 1);
}

console.log(evens([1, 2, 3, 4, 5, 6]));