const JSON = require('./calculator_messages.json');
const lang = 'en';

const readline = require('readline-sync');

let prompt = (message) => console.log(`=> ${message}`);

// Check if number valid
let invalidNumber = (number) => number.trimStart() === '' || Number.isNaN(Number(number));

prompt(JSON[lang].welcome);

// Ask user for first number
function firstNumber() {
  prompt(JSON[lang].first);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(JSON[lang].invalid);
    number1 = readline.question();
  }
  return number1;
}

// Ask user for second number
function secondNumber() {
  prompt(JSON[lang].second);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(JSON[lang].invalid);
    number2 = readline.question();
  }
  return number2;
}

// Ask user for operator
function chooseOperator() {
  prompt(JSON[lang].operator);
  let operator = readline.question();

  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt(JSON[lang].opCheck);
    operator = readline.question();
  }
  return operator;
}

// Perform calculation
function calculator(number1, number2, operator) {
  switch (operator) {
    case '1':
      return Number(number1) + Number(number2);
    case '2':
      return Number(number1) - Number(number2);
    case '3':
      return Number(number1) * Number(number2);
    case '4':
      return Number(number1) / Number(number2);
  }
}


// Ask user if they want to perform another calculation
let proceed = 'y';

do {
  prompt(`${JSON[lang].output} ${calculator(firstNumber(), secondNumber(), chooseOperator())}.`);
  prompt(JSON[lang].repeat);
  proceed = readline.question();

  while (!['y', 'n'].includes(proceed.toLowerCase())) {
    prompt(JSON[lang].repeatCheck);
    proceed = readline.question();
  }
} while (proceed.toLowerCase() === 'y');
