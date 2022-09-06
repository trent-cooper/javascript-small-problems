function formatDate(string) {
  if (string.match(/-/)) {
    return string.split('-').reverse().join('.');
  } else {
    return string;
  }
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)