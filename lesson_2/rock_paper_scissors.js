const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const prompt = (message) => console.log(`=> ${message}`);

function returnWinner(playerInput, computerInput) {
  if ((playerInput === 'rock' && ['scissors', 'lizard'].includes(computerInput)) ||
    (playerInput === 'paper' && ['rock', 'spock'].includes(computerInput)) ||
    (playerInput === 'scissors' && ['paper', 'lizard'].includes(computerInput)) ||
    (playerInput === 'lizard' && ['spock', 'paper'].includes(computerInput)) ||
    (playerInput === 'spock' && ['scissors', 'rock'].includes(computerInput))) {
    return 'You win!';
  } else if (playerInput === computerInput) {
    return 'It\'s a tie';
  } else {
    return 'Computer wins!';
  }
}

function returnFullSelection(choice) {
  switch (choice[0]) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 'l':
      return 'lizard';
    case 's':
      if (choice[1] === 'c') {
        return 'scissors';
      } else if (choice[1] === 'p') {
        return 'spock';
      }
  }
  return 'invalid';
}

let playerScore = 0;
let computerScore = 0;

while (playerScore < 3 && computerScore < 3) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();
  let choiceFull = returnFullSelection(choice);

  while (!VALID_CHOICES.includes(choiceFull)) {
    prompt('That\'s not a valid choice, please try again');
    choice = readline.question().toLowerCase();
    choiceFull = returnFullSelection(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choiceFull}, Computer chose ${computerChoice}.`);

  let roundMessage = returnWinner(choiceFull, computerChoice);
  prompt(roundMessage);

  if (roundMessage[0] === 'Y') {
    playerScore++;
  } else if (roundMessage[0] === 'C') {
    computerScore++;
  }

  prompt(`Current Score | You: ${playerScore} | Computer: ${computerScore}`);

}

if (playerScore === 3) {
  prompt('You\'re the grand winner! Congrats! Thanks for playing.');
} else {
  prompt(`The computer wins :( Better luck next time!`);
}

// prompt('Do you want to play again? (Y/N)');
// let answer = readline.question().toLowerCase();
// while (answer[0] !== 'n' && answer[0] !== 'y') {
//   prompt('Please enter "y" or "n".');
//   answer = readline.question().toLowerCase();
// }

// if (answer[0] !== 'y') break;


// if ((playerInput === 'rock' && computerInput === ('scissors' || 'lizard')) ||
//   (playerInput === 'paper' && computerInput === ('rock' || 'spock')) ||
//   (playerInput === 'scissors' && computerInput === ('paper' || 'lizard')) ||
//   (playerInput === 'lizard' && computerInput === ('spock' || 'paper')) ||
//   (playerInput === 'spock' && computerInput === ('scissors' || 'rock')))

