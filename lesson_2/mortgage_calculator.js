const readline = require('readline-sync');

let prompt = (message) => console.log(`=> ${message}`);

// Ensure user can enter amount with or without $ sign
let dollarParse = (money) => {
  return Number(money.replace('$', '').replace(',', ''));
};

// Check that number isn't 0 or negative
let numCheck = (number) => {
  return isNaN(number) || (number <= 0);
};

prompt('What is your total loan amount?');
let loanAmount = dollarParse(readline.question());

while (numCheck(loanAmount)) {
  prompt('Must enter a number, greater than 0. Please try again.');
  loanAmount = dollarParse(readline.question());
}

// Ensure user can enter amount with or without % sign
let percentageParse = (percentage) => {
  return (percentage.replace('%', '') / 100) / 12;
};

// Check input is number and is inputed as full percentage (0% APR OK)
let percentageCheck = (percentage) => (percentage < 0) || isNaN(percentage);

prompt('What is your APR as a percentage?');
let monthlyInterest = percentageParse(readline.question());

while (percentageCheck(monthlyInterest)) {
  prompt('Must enter a full percentage amount. Please try again.');
  monthlyInterest = percentageParse(readline.question());
}

let durationCheck = (duration) => duration <= 6 || isNaN(duration);

prompt('What is the loan duration in years?');
let loanDuration = ( readline.question() * 12 );

// Make sure years entered as non integer are accounted for
while (durationCheck(loanDuration)) {
  prompt('Please enter a loan duration half a year or greater.');
  loanDuration = ( readline.question() * 12 );
}

let monthlyPayment = paymentFormula(loanAmount, monthlyInterest, loanDuration);

function paymentFormula(loan, interest, time) {
  let monthlyRaw = loan * (interest / (1 - Math.pow((1 + interest), (-time))));
  return monthlyRaw.toFixed(2);
}

prompt(`Your monthly payment amount is $${monthlyPayment}.`);