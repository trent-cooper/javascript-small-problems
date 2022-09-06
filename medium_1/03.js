function maxRotation(number) {
  let length = String(number).length;
  for (let idx = length; idx > 1; idx--) {
    number = rotateRightmostDigits(number, idx);
  }
  return number;
}

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845