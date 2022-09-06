let isBlank = (string) => {
  if (string) {
    return false;
  } else {
    return true;
  }
}

console.log(isBlank('mars'));
console.log(isBlank('   '));
console.log(isBlank(''));