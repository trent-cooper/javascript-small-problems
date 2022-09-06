// input: string to be encrypted, key # for encryption
// output: encrypted string

// explicit:
  // Only letters are substituted
  // All other characters are left as-is
  // Letters are substituted with the letter N places away in the alphabet (left to right)
  // Substituted letters must maintain case of initial letter
  // if subsitution position of letter exceeds end of alphabet, it wraps around to beginning

// implicit:
  // 0 key returns input as-is
  // spaces are left in string
  // punctuation is left in string

// data: array

// algo:
  // create constant alphabet KEY (lower case)
  // split string into an array
  // map array
    // if non letter character, return character
    // if letter character
      // coerce character to lower case
      // get index of char in KEY
      // new index = KEY index + Encryption key
      // let newChar = returnChar(new index)
      // if character.toUpper === character
        // return newChar.toUpper
      // else return newChar
  // return array.join('')
  
  // returnChar
    // takes index value as input
    // initialize count @ 0;
    // while index >= 0;
      // if count === 25
        // count = 0
      // else 
        // count++
      // index--
    // return KEY[count]

const KEY = 'abcdefghijklmnopqrstuvwxyz';

function returnChar(idx) {
  let index = idx;
  let count = 0;
  while (index > 0) {
    if (count === 25) {
      count = 0;
    } else {
      count += 1;
    }
    index--;
  }

  return KEY[count];
}

function caesarEncrypt(str, num) {
  let arr = str.split('');

  let mapArr = arr.map(char => {
    if (char.match(/[a-z]/gi)) {
      let idx = KEY.indexOf(char.toLowerCase());
      let fullIDX = idx + num;
      let newChar = returnChar(fullIDX);
      return char.toUpperCase() === char ? newChar.toUpperCase() : newChar;
    }

    return char;
  })

  return mapArr.join('');
}


console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));