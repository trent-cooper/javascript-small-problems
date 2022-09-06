// input: single integer (negative/positive)
// output: if positive integer, return string representation of number type
//          if negative, throw error

//  iterate from one up to (n - 1) and collect all numbers that n % i === 0
//    hold all numbers in an array
//    calculate sum of array
//    if (sum === n) - return 'perfect'
//    if (sum > n) - return 'abundant'
//    if (sum < n) - return 'deficient'
//  Store program as static method on the PerfectNumber constructor
//    number to test is passed to static method

class PerfectNumber {
  constructor() {

  }

  static classify(num) {
    if (num < 1) {
      throw new Error('Invalid number input');
    }

    let divisors = [];

    for (let idx = 1; idx < num; idx++) {
      if (num % idx === 0) {
        divisors.push(idx);
      }
    }

    let sum = divisors.reduce((accum, curr) => accum + curr, 0);

    if (sum > num) {
      return 'abundant';
    } else if (sum < num) {
      return 'deficient';
    } else if (sum === num) {
      return 'perfect';
    }
  }
}

module.exports = PerfectNumber;