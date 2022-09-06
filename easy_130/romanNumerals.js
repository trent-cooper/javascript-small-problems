class RomanNumeral {
  constructor(num) {
    this.num = num;
  }

  toRoman() {
    let stringNum = String(this.num);
    let digits = stringNum.length;
    let romanString = '';

    for (let idx = 0; idx < stringNum.length; idx++) {
      if (stringNum[idx] !== '0') {
        romanString += this.returnRoman(stringNum[idx], digits);
      };
      digits--;
    }

    return romanString;
  }

  returnRoman(num, length) {
    let a, b, c;

    if (length === 1) {
      [ a, b, c ] = ['I', 'V', 'X'];
    } else if (length === 2) {
      [ a, b, c ] = ['X', 'L', 'C'];
    } else if (length === 3) {
      [ a, b, c ] = ['C', 'D', 'M'];
    } else if (length === 4) {
      [ a, b, c ] = ['M', '?', '?'];
    }

    const ROMAN_KEY = [[a], [a, a], [a, a, a], [a, b], [b], 
    [b, a], [b, a, a,], [b, a, a, a], [a, c]];

    return ROMAN_KEY[num - 1].join('');
  }
}

module.exports = RomanNumeral;

// [[a], [a, a], [a, a, a], [a, b], [b], [b, a], [b, a, a,], [b, a, a, a], [a, c]]