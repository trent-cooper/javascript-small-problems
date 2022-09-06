class SumOfMultiples {
  constructor(...nums) {
    this.set = nums;
  }

  static to(num) {
    return SumOfMultiples.getSum(num, [3, 5])
  }

  to(num) {
    return SumOfMultiples.getSum(num, this.set);
  }

  static getSum(num, arr) {
    let sum = 0;

    for (let idx = 1; idx < num; idx++) {
      if (arr.some(value => idx % value === 0)) {
        sum += idx;
      }
    }

    return sum;
  }
}

module.exports = SumOfMultiples;