const readline = require('readline-sync');

console.log('What is the bill?');
let bill = Number(readline.question());
console.log(typeof bill);

console.log('What is the tip percentage?');
let tipPercentage = Number(readline.question()) / 100;
console.log(typeof tipPercentage);

let tipTotal = (bill * tipPercentage).toFixed(2);
let billTotal = bill + Number(tipTotal);

console.log(`The tip is $${tipTotal}`);
console.log(`The total is $${billTotal}`);