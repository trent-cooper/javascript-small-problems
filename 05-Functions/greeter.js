const rlSync = require('readline-sync');

let getName = (text) => rlSync.question(`${text}`);

let firstName = getName("What is your first name?\n");
let lastName = getName("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);