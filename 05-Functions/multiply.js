const rlSync = require('readline-sync');

let multiply = (a, b) => a * b;

let a = Number(rlSync.question('First Number?\n'));
let b = Number(rlSync.question('Second Number?\n'));

console.log(`${a} * ${b} = ${multiply(a, b)}`);