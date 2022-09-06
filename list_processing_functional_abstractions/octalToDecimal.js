function octalToDecimal(numberString) {
  let numArr = numberString.split('').map(ele => Number(ele));
  let count = numberString.length - 1;

  return numArr.reduce((acc, curr) => {
    let power = 8**count;
    count--
    return acc + (curr * power);
  }, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9