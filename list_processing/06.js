function leadingSubstrings(string) {
  let substrArr = [];

  for (let i = 1; i <= string.length; i++) {
    substrArr.push(string.substring(0, i));
  }

  return substrArr;
}

function substrings(string) {
  let finalSubArr = [];

  for (let i = 0; i < string.length; i++) {
    let substr = leadingSubstrings(string.slice(i));
    finalSubArr.push(...substr);
  }

  return finalSubArr;
}

function palindromes(string) {
  let subArr = substrings(string);
  return subArr.filter(substr => substr.length >= 2)
               .filter(substr => substr === substr.split('').reverse().join(''));
}

console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));