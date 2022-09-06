function catAge(age) {
  if (age === 1) {
    return 15;
  } else if (age === 2) {
    return 24;
  } else if (age > 2) {
    return 24 + ( age - 2 ) * 4;
  } else;
    return 0;
}


console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32