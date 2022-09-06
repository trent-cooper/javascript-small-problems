let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let newObj = {};

let arrayToObject = (array) => {
  for (let i = 0; i < array.length; i++) {
    newObj[array[i][0]] = array[i][1];
  }
}

arrayToObject(nestedArray);

console.log(newObj);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }