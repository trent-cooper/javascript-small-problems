const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

function stringToSignedInteger(string) {
  let sign = '';
  let arrayTemp = string.split("");
  if (arrayTemp[0] === "+" || arrayTemp[0] === "-") {
    sign = arrayTemp.shift();
  }
  let arrayOfDigits = arrayTemp.map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  if (sign === "-") {
    value *= -1;
  }
  return value;
}


console.log(stringToSignedInteger("4321")); // logs true
console.log(stringToSignedInteger("-570")); // logs true
console.log(stringToSignedInteger("+100")); // logs true