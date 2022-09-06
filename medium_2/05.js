// input: integer
// output: integer (string if input number is too large)

// rules:
//  return next number past input that meets following requirements:
//    a multiple of 7
//    an odd number
//    each digit of the number appears only once in the number
//  input number cannot be higher than 9876543201, otherwise return string 'There is no possible number that fulfills those requirements.'

// algo:
//    create while loop that begins incrementing input by 1 until a multiple of 7 is found
//    check number if odd number
//      if odd: check if all digits unique
//      if not odd: increment by 7 and continue checking if all digits unique
//      if odd and unique, return number


function featured(num) {
  if (num >= 9876543201) {
    return 'There is no possible number that fulfills those requirements';
  }

  let numCount = num + 1;

  while (true) {

    while (true) {
      if (numCount % 7 === 0) {
        break;
      }
      numCount++;
    }

    if (numCount % 2 !== 0) {
      if (digitsUnique(numCount)) {
        return numCount;
      }
    }
    numCount += 7;
  }
}

function digitsUnique(num) {
  let numArr = String(num).split('');
  let holdArr = [];

  for (let idx = 0; idx < numArr.length; idx++) {
    if (holdArr.includes(numArr[idx])) {
      return false;
    }
    holdArr.push(numArr[idx]);
  }

  return true;

}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));   //1029
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543186));
console.log(featured(9876543200));
console.log(featured(9876543201));
