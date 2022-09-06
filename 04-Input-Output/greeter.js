let rlSync = require('readline-sync');
let nameFirst = rlSync.question("What is your first name?\n");
let nameLast = rlSync.question("What is your last name?\n");
console.log(`Hello, ${nameFirst} ${nameLast}!`);