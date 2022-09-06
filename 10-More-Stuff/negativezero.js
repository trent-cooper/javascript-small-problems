let value = -0;
let value2 = 0;

let zeroCheck = input => {
  // console.log(typeof input);
  // console.log(isFinite(input));
  // console.log(value);
  // console.log(1 / value);
  // // console.log(value2);
  // console.log( (0 * 2) / 0);
  // console.log(1 / 0);
  // if (input === (input * 1)) {
  //   return true;
  // } else {
  //   return false;
  // }
  if (1 / input === -Infinity) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroCheck(value));
console.log(zeroCheck(value2));