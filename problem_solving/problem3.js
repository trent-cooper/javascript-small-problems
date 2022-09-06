// input: word string
// output: boolean representation if word can be made with blocks

// data structure: store blocks in nested array

// explicit:
  // Each block has 2 letters
    // Only 1 letter from each block can be used by a word
    // A block can only be used once
  // input/blocks are case-insensitive

// implicit: 
  // All blocks/block characters are unique.

// algo:
  // create constant holding block key as nested array
  // initialize variable with copy of block key
  // coerce string into uppercase string
  // initialize counter = 0;
  // iterate over string
    // for each character, iterate over block key
      // if block includes character
        // replace values from block
        // increment counter
        // continue to next iteration
  // return count === string.length

const BLOCKS = [
  'BO', 'GT', 'VI', 'XK', 'RE', 'LY',
  'DQ', 'FS', 'ZM', 'CP', 'JW', 'NA', 'HU'
];

function isBlockWord(string) {
  let blocks = BLOCKS.slice();

  if (typeof string !== 'string' || string.length === 0) return false;
  let str = string.toUpperCase();

  let count = 0;

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    for (let idx2 = 0; idx2 < blocks.length; idx2++) {
      if (blocks[idx2].includes(char)) {
        count++;
        blocks[idx2] = '**';
        break;
      }
    }
  }

  return str.length === count;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));
console.log(isBlockWord('bB'));
console.log(isBlockWord('Z'));
console.log(isBlockWord(''));
console.log(isBlockWord('12345'));
console.log(isBlockWord('BD-GS'));