let stringToInteger = (string) => string * 1;

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


//Further Exploration

const hexKey = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

function hexadecimalToInteger(string) {
  let arrayHold = string.split('').map(char => hexKey[char]);
  let value = 0;
  let index = 0;
  for (let i = arrayHold.length - 1; i >= 0; i--) {
    value += arrayHold[i] * ( 16 ** index);
    index++;
  }
  return value;
}

console.log(hexadecimalToInteger('4D9f'));