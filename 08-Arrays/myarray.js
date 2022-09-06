let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

// let newArray = myArray.filter(num => (num % 2) === 0);

// newArray.forEach(num => console.log(num));

//OR:

myArray.forEach(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
});