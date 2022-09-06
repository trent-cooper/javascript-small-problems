function leadingSubstrings(string) {
  let substrArr = [];

  for (let i = 1; i <= string.length; i++) {
    substrArr.push(string.substring(0, i));
  }

  return substrArr;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]