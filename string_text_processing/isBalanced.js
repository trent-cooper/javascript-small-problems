function isBalanced(string) {
  let count = 0;

  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === '(') {
      count++;
    } else if (string[idx] === ')') {
      count--
    }

    if (count < 0) return false;
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false