// function add(first, second) {
//   return first + second;
// }

// function makeAdder(firstNumber) {
//   return function(secondNumber) {
//     return add(firstNumber, secondNumber);
//   };
// }

function makeAdder(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  }
}

let adder5 = makeAdder(5);

console.log(adder5(6));