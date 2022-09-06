const readline = require('readline-sync');

let counter = 1;
function sum(topInteger) {
  for (let i = 2; i <= topInteger; i++) {
    counter += i;
  }
}

function product(topInteger) {
  for (let i = 2; i <= topInteger; i++) {
    counter *= i;
  }
}

let topInteger = readline.question('Please enter an integer greater than 0: ');
let method = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (method === 's') {
  sum(topInteger);
  console.log(`The sum of the integers between 1 and ${topInteger} is ${counter}`);
} else if (method === 'p') {
  product(topInteger);
  console.log(`The product of the integers between 1 and ${topInteger} is ${counter}`);
}
