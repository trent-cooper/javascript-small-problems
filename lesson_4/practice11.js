let statement = "The Flintstones Rock";

let stringArray = statement.split('');

let stringObj = {};

stringArray.forEach(letter => {
  if (stringObj.hasOwnProperty(letter)) {
    stringObj[letter] += 1;
  } else if (letter !== ' ') {
    stringObj[letter] = 1;
  }
});

console.log(stringObj);