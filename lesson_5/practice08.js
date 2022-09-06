let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let strings = Object.values(obj);

strings.forEach(arr => {
  arr.forEach(string => {
    string.split('').forEach(letter => {
      if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
        console.log(letter);
      }
    });
  });
});