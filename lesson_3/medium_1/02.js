let munstersDescription = "The Munsters are creepy and spooky.";

let newDescription = munstersDescription.toUpperCase().split(' ');

let newArray = [];

newDescription.forEach(word => newArray.push(word[0].toLowerCase() + word.slice(1)));

console.log(newArray.join(' '));


let betterDescription = munstersDescription.split('').map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');

console.log(betterDescription);