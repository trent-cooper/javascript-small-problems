let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(numbers, multiplier) {
  let mutlipliedNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];
    mutlipliedNums.push(currentNumber * multiplier);
  }
  return mutlipliedNums;
}

console.log(multiply(myNumbers, 3));