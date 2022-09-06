function myBind(func, context, ...args) {
  return function() {
    return func.call(context, ...args, ...arguments);
  };
}

// let obj = {
//   name: 'jeff',
// }

// function sayNums(num1, num2, num3) {
//   console.log(num1);
//   console.log(num2);
//   console.log(num3);
// }

// let invok1 = myBind(sayNums, obj, 1, 2);

// invok1(3);

function addNumbers(a, b) {
  let val = a + b
  return val;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10));
