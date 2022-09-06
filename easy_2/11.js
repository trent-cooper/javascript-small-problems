function integerToString(num) {
  let array = [];
  while (num > 0) {
    let remainder = num % 10;
    array.push(remainder);
    num = (num - remainder) / 10;
  }
  return array.reverse().join('');
}

integerToString(4321);
integerToString(0);
integerToString(5000);
integerToString(1234567890);