// for (let i = 1; i < 100; i += 2) {
//   console.log(i);
// }

// Alternative solution:

const readline = require('readline-sync');

console.log('What number would you like to start with?  Select an odd number.');
let start = Number(readline.question());

console.log('What number would you like to count up to?');
let finish = Number(readline.question());

while (start <= finish) {
  console.log(start);
  start += 2;
}