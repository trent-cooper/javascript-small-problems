function shortLongShort (string1, string2) {
  if (string1.length < string2.length) {
    return string1 + string2 + string1;
  } else if (string2.length < string1.length) {
    return string2 + string1 + string2;
  } else {
    return 'The strings are the same length';
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"