/* eslint-disable no-tabs */
/* eslint-disable max-len */
// input: string
// output: boolean

// rules:
//    input is case-insensitive
//    we have 13 two-letter blocks
//    if any word contains both letters of a block, return false
//    if any word has 2 of the same letters, return false
//    if a block is used more than once, return false

// algo:
//    store blocks in a nested array
//    split input string into array with each character as an element
//    iterate over string array
//    for each character, iterate over block array checking for matches
//    if match is found, change block array value and break loop
//

const BLOCKS = [['B', 'O'], ['G', 'T'], ['V', 'I'], ['X', 'K'], ['R', 'E'], ['L', 'Y'], ['D', 'Q'],
               ['F', 'S'], ['Z', 'M'], ['C', 'P'], ['J', 'W'], ['N', 'A'], ['H', 'U']];

function isBlockWord(string) {
  let blockArr = BLOCKS.slice();
  let stringArr = string.toUpperCase().split('');

  for (let idx = 0; idx < stringArr.length; idx++) {
    let currentChar = stringArr[idx];
    if (blockCheck(currentChar, blockArr)) {
      replaceBlock(currentChar, blockArr);
    } else {
      return false;
    }
  }
  return true;
}

function blockCheck(currentChar, blockArr) {
  return blockArr.some(ele => ele.includes(currentChar));
}

function replaceBlock(currentChar, blockArr) {
  for (let blockID = 0; blockID < blockArr.length; blockID++) {
    if (blockArr[blockID].includes(currentChar)) {
      blockArr[blockID] = [];
      break;
    }
  }
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true