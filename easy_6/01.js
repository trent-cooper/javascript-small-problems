function repeater(string) {
  let doubled = string.split('').map(char => char + char);
  return doubled.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""