let nameResponse = 'Trent'; //Enter name, too lazy to install/implement readline-sync
let lastChar = nameResponse.length - 1;

if (nameResponse[lastChar] === '!') {
  console.log(`HELLO ${nameResponse.slice(0, lastChar).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${nameResponse}.`);
}