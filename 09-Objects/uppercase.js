let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// let upperArray = [];
let arr = Object.keys(obj);

// arr.forEach(str => upperArray.push(str.toUpperCase()));

//OR:

let upperArray = arr.map(key => key.toUpperCase());

console.log(upperArray);
console.log(obj);