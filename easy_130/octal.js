class Octal {
  constructor(num) {
    this.octal = num;
  }

  toDecimal() {
    if (!this.checkValid(this.octal)) {
      return 0;
    }

    let octal = this.octal;
    let maxIdx = octal.length - 1;
    let decimal = 0;

    for (let idx = 0; idx <= maxIdx; idx++) {
      let power = (maxIdx - idx);
      decimal += Number(octal[idx]) * (8 ** power);
    }

    return decimal;
  }

  checkValid(octal) {
    if (isNaN(Number(octal))) {
      return false;
    } 

    if (octal.split('').some(num => num === '8' || num === '9')) {
      return false;
    }

    return true;
  }
}

module.exports = Octal;