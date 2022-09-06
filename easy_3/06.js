const readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter a adjective: ');
let adverb = readline.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);