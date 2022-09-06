function swapCase(string) {
  return string
    .split('')
    .map(char => {
      if (char.toUpperCase() === char) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"