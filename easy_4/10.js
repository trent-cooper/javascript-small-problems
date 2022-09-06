function swap(string) {
  let stringArr = string.split(' ');
  let swapArr = stringArr.map(word => {
    if (word.length === 1) {
      return word;
    }

    let first = word[0];
    let last = word[word.length - 1];
    let swap = last + word.slice(1, -1) + first;
    return swap;
  });
  return swapArr.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"