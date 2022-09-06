function substrings(str) {
  let arr = [];

  for (let idx = 0; idx < str.length; idx++) {
    for (let count = 1; count <= str.length - idx; count++) {
      arr.push(str.substr(idx, count));
    }
  }

  return arr;
}

function palindromes(str) {
  return substrings(str).filter(substr => {
    return substr === substr.split('').reverse().join('') && substr.length > 1;
  });
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));