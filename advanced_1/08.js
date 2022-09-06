var Fraction = require('fraction.js');

function egyptian(fraction) {
  let frac = fraction.n / fraction.d;
  let holdArr = [];
  let idx = 1;

  while (true) {
    let holdTotal = holdArr.reduce((a, b) => a + (1 / b), 0);

    if (holdTotal + (1 / idx) === frac) {
      holdArr.push(idx);
      break;
    } else if (holdTotal + (1 / idx) < frac) {
      holdArr.push(idx);
      idx++;
    } else if (holdTotal + (1 / idx) > frac) {
      idx++;
    }
  }

  return holdArr;
}

function unegyptian(array) {
  return array.reduce((a, b) => a + (1 / b), 0);
}


console.log(egyptian(new Fraction(3, 1)));
console.log(unegyptian(egyptian(new Fraction(1, 2))));