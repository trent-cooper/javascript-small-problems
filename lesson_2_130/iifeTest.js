let makeUniqueId = (function() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  }
})();

console.log(makeUniqueId());
console.log(makeUniqueId());

console.log(makeUniqueId());

