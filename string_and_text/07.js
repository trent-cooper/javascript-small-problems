function staggeredCase(string) {
  let counter = 0;
  return string
    .split('')
    .map((char) => {
      if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
        if (counter % 2 === 0) {
          counter++;
          return char.toUpperCase();
        } else {
          counter++;
          return char.toLowerCase();
        }
      }
      return char;
    })
    .join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);