function isPalindrome(string) {
  let half = Math.floor(string.length / 2);
  let first = string.slice(0, half);
  let second = string.slice(-half).split('').reverse().join('');
  if (first === second) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true