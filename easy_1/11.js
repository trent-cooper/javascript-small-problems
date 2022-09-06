function utf16Value(stringInput) {
  let utfSum = 0;
  for (let i = 0; i < stringInput.length; i++) {
    utfSum += stringInput.charCodeAt(i);
  }
  return utfSum;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));