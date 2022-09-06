let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    numbers[counter] *= 2;

    counter += 1;
  }

  return numbers;
}

doubleNumbers(myNumbers);
console.log(myNumbers);