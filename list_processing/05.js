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

console.log(substrings('abcde'));