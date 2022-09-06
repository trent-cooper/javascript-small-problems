function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function factors2(number) {
  let array = [];
  for (i = number; i > 0; i--) {
    if (number % i === 0) {
      array.push(number / i);
    }
  }
  return array;
}

console.log(factors2(10));
console.log(factors2(0));
console.log(factors2(-10));