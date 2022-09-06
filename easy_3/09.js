const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function cleanUp(string) {
  let arr = string.split('');
  let charArr = arr.map(char => {
    if (ALPHABET.includes(char.toLowerCase())) {
      return char;
    } else {
      return ' ';
    }
  });

  let finalArr = charArr.filter((char, index) => {
    if (char === charArr[index - 1]) {
      return false;
    }
    return true;
  });
  return finalArr.join('');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "