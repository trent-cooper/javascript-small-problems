const CONSTS = ('bcdfghjklmnpqrstvwxyz');

function doubleConsonants(string) {
  return string.split('').map(char => {
    if (CONSTS.includes(char.toLowerCase())) {
      return char + char;
    } else {
      return char;
    }
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""