function leadingSubstrings(str) {
  return str.split('').map((_, idx, arr) => arr.slice(0, idx + 1).join(''));
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));