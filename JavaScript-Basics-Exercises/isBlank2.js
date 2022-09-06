let isBlank = (string) => {
  let newString = string.replaceAll(' ', '');
  return newString.length === 0;
}

console.log(isBlank('mars'));
console.log(isBlank('   '));
console.log(isBlank(''));