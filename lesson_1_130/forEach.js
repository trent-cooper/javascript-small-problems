let arr = [1, 2, 3, 4];

// Array.prototype.forEach
arr.forEach(value => console.log(value * value));


function forEach(arr, func) {
  for (let idx = 0; idx < arr.length; idx++) {
    func(arr[idx]);
  }
  // return undefined;
}

// Our forEach function
console.log(forEach(arr, value => console.log(value * value)));