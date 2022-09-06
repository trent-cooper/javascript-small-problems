const readline = require('readline-sync');

let age = readline.question('What is your age? ');
let retire = readline.question('At what age would you like to retire? ');

let workYears = retire - age;
let date = new Date();
let year = date.getFullYear();

console.log(`It's ${year}. You will retire in ${year + workYears}`);
console.log(`You have only ${workYears} years of work to go!`);