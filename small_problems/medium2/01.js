function letterPercentages(str) {
  let upper = str.split('').filter(char => /[A-Z]/.test(char)).length;
  let lower = str.split('').filter(char => /[a-z]/.test(char)).length;
  let other = str.split('').filter(char => /[^a-z]/i.test(char)).length;

  return {
    lowercase: (lower / str.length * 100).toFixed(2),
    upper: (upper / str.length * 100).toFixed(2),
    neither: (other / str.length * 100).toFixed(2),
  }
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));