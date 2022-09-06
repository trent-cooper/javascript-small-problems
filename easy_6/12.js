function isBalanced(string) {
  let leftCount = 0;
  let rightCount = 0;
  string.split('').forEach(char => {
    if (char === '(') {
      leftCount++;
    } else if (char === ')' ) {
      if (leftCount > rightCount) {
        rightCount++;
      } else {
        rightCount--;
      }
    }
  });
  return (leftCount === rightCount);
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);