// input: string containing some numbers, possibly non-numbers
// output: boolean representation of Luhn formula validity

// datatype: string -> array

// explicit:
  // ignore all non-numeric characters
  // working from right-most character, double every other digit, starting with second from end
  // if doubled digit >= 10, subtract 9 from value
  // after iterating, sum all digits
  // if sum value ends in 0, return true, else return false

// algo:
  // sanitize string with match regex, remove all non-digit characters
  // split sanitized string into array w/ each digit as element - coerce each into number
  // reverse array
  // iterate over array
  // if idx is odd, double current value
    // if doubled value >= 10
      // return doubled value - 9
    // else return doubled value
  // reduce array to sum of values
  // coerce value to string
  // check last character
    // if 0, return true
    // else return false

function luhnFormula(string) {
  let sanitized = string.replace(/[^0-9]/g, '');

  let numArr = sanitized.split('')
                        .reverse()
                        .map(Number);

  let doubleArr = numArr.map((num, idx) => {
    if (idx % 2 === 1) {
      if (num * 2 >= 10) {
        return num * 2 - 9;
      }
      return num * 2;
    }

    return num;
  });

  let sum = doubleArr.reduce((acc, curr) => acc + curr, 0);
  let sumString = sum.toString();

  return sumString[sumString.length - 1] === '0' ? true : false;
}

console.log(luhnFormula('1111'));
console.log(luhnFormula('8763'));
console.log(luhnFormula('2323 2005.7766-3554'));
