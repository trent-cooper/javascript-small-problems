let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (words, reg) => {
  let matchArray = [];
  words.forEach(function(string) {
    if (reg.test(string)) {
      matchArray.push(string);
    }
  });
  return matchArray;
}

console.log(allMatches(words, /lab/));