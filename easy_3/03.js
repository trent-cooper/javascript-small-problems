function stringy(num) {
  let string = '';
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      string += '0';
    } else {
      string += '1';
    }
  }
  return string;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));