const VOWELS = 'aeiouAEIOU';

function removeVowels(stringArr) {
  return stringArr.map(subStr => {
    return subStr.split('').filter(char => !VOWELS.includes(char)).join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]