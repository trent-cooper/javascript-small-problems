// PEDAC done in notebook

const ALPH = 'abcdefghijklmnopqrstuvwxyz';

function vigenere(str, keyword) {
  let keyCounter = returnKeyCounter(keyword);
  let strArr = str.split('');

  return strArr.map((char) => {
    if (char.match(/[a-z]/i)) {
      let charIdx = getIdx(char.toLowerCase());
      let shiftChar = keyCounter(charIdx);
      return char.toUpperCase() === char ? shiftChar.toUpperCase() : shiftChar;
    }

    return char;
  }).join('');
}

function returnKeyCounter(keyword) {
  keyword = keyword.toLowerCase();
  let idx = 0;
  let max = keyword.length - 1;

  return (curr) => {
    let char = keyword[idx];

    if (idx === max) {
      idx = 0;
    } else {
      idx++;
    }

    return getChar(ALPH.indexOf(char) + curr);
  }
}

function getIdx(char) {
  return ALPH.indexOf(char);
}

function getChar(idx) {
  const KEY = ALPH + ALPH;
  return KEY[idx];
}

console.log(vigenere("Pineapples don't go on pizzas!", 'cab'));
console.log(vigenere("Dog", 'rabbit'));
