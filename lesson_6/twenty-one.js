const readline = require('readline-sync');
const STANDARD_DECK = [
  ['H', '2'], ['D', '2'], ['C', '2'], ['S', '2'],
  ['H', '3'], ['D', '3'], ['C', '3'], ['S', '3'],
  ['H', '4'], ['D', '4'], ['C', '4'], ['S', '4'],
  ['H', '5'], ['D', '5'], ['C', '5'], ['S', '5'],
  ['H', '6'], ['D', '6'], ['C', '6'], ['S', '6'],
  ['H', '7'], ['D', '7'], ['C', '7'], ['S', '7'],
  ['H', '8'], ['D', '8'], ['C', '8'], ['S', '8'],
  ['H', '9'], ['D', '9'], ['C', '9'], ['S', '9'],
  ['H', '10'], ['D', '10'], ['C', '10'], ['S', '10'],
  ['H', 'J'], ['D', 'J'], ['C', 'J'], ['S', 'J'],
  ['H', 'Q'], ['D', 'Q'], ['C', 'Q'], ['S', 'Q'],
  ['H', 'K'], ['D', 'K'], ['C', 'K'], ['S', 'K'],
  ['H', 'A'], ['D', 'A'], ['C', 'A'], ['S', 'A'],
];
const TOP_SCORE = 21;
const DEALER_STAY = 17;

function shuffle(array) {
  for (let idx = array.length - 1; idx > 0; idx--) {
    let otherIdx = Math.floor(Math.random() * (idx + 1));
    [array[idx], array[otherIdx]] = [array[otherIdx], array[idx]];
  }
}

function dealHands(deck, playerHand, dealerHand) {
  playerHand.push(deck.pop());
  playerHand.push(deck.pop());
  dealerHand.push(deck.pop());
  dealerHand.push(deck.pop());
}

function dealCard(deck, user) {
  user.push(deck.pop());
}

// eslint-disable-next-line max-len
function displayHands(playerHand, dealerHand, playerTotal, dealerTotal, showHidden = 0) {
  console.clear();
  if (showHidden) {
    console.log(`Dealer's Hand: (Total = ${dealerTotal})`);
    displayCard(dealerHand);
  } else {
    console.log("Dealer's Hand: (Total = ??)");
    displayCard(dealerHand, 1);
  }
  console.log('');
  console.log('===============================');
  console.log('');
  console.log(`Player's Hand: (Total = ${playerTotal})`);
  displayCard(playerHand);
  console.log('');
}

// eslint-disable-next-line max-lines-per-function
function displayCard(hand, hideCard = 0) {
  let cardLine = ['', '', '', ''];
  let handCopy = hand.slice('');
  if (hideCard) {
    handCopy[0] = ['?', '?'];
  }
  debugger;

  handCopy.forEach(card => {
    cardLine[0] += '  ---------  ';
    if (card[1] === '10') {
      cardLine[1] += ` |${card[1]}     ${card[1]}| `;
    } else {
      cardLine[1] += ` |${card[1]}       ${card[1]}| `;
    }
    cardLine[2] += ' |         | ';
    cardLine[3] += ` |    ${card[0]}    | `;
  });

  console.log(cardLine[0]);
  console.log(cardLine[1]);
  console.log(cardLine[2]);
  console.log(cardLine[3]);
  console.log(cardLine[2]);
  console.log(cardLine[1]);
  console.log(cardLine[0]);
}

function checkHand(total, user = 0) {

  if (total > TOP_SCORE) {
    return 1;
  } else if (user && total >= DEALER_STAY) {
    return 2;
  } else {
    return false;
  }
}

function sumHand(hand) {
  let values = hand.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (sum > TOP_SCORE) sum -= 10;
  });

  return sum;
}

function displayWinner(playerTotal, dealerTotal, score) {
  if (checkHand(playerTotal) === 1) {
    console.log('You busted :( Dealer wins this hand.');
    score.dealer += 1;
  } else if (checkHand(dealerTotal) === 1) {
    console.log('Dealer busted! You win this hand.');
    score.player += 1;
  } else if ((playerTotal) > (dealerTotal)) {
    console.log('You win!');
    score.player += 1;
  } else if ((dealerTotal) > (playerTotal)) {
    console.log('Dealer wins.');
    score.dealer += 1;
  } else {
    console.log('It\'s a tie!');
  }
}

function playAgain(score) {
  console.log(`Current Score - Player: ${score.player} | Dealer: ${score.dealer}`);
  let answer = readline.question('Would you like to play another hand? (Y/N): ').toLowerCase()[0];
  while (true) {
    if (['y', 'n'].includes(answer)) break;
    answer = readline.question('Please enter Y/N: ').toLowerCase()[0];
  }
  return (answer === 'y');
}

function checkScore(score) {
  if (score.player === 5) {
    return 'Player';
  } else if (score.dealer === 5) {
    return 'Dealer';
  } else {
    return null;
  }
}

while (true) {
  let score = {
    player: 0,
    dealer: 0
  };

  while (true) {
    let deck = STANDARD_DECK.slice();
    shuffle(deck);

    let playerHand = [];
    let dealerHand = [];
    dealHands(deck, playerHand, dealerHand);
    let playerTotal = sumHand(playerHand);
    let dealerTotal = sumHand(dealerHand);
    displayHands(playerHand, dealerHand, playerTotal, dealerTotal);

    while (true) {

      let answer;

      while (true) {
        console.log('(H)it or (S)tay?');
        answer = readline.question().toLowerCase()[0];
        if (['h', 's'].includes(answer)) break;
        console.log('Must enter H/S to proceed');
      }

      if (answer === 'h') {
        dealCard(deck, playerHand);
        playerTotal = sumHand(playerHand);
        displayHands(playerHand, dealerHand, playerTotal, dealerTotal);
        console.log(`You chose to hit - Your hand total is now ${playerTotal}`);
      }

      if (answer === 's' || checkHand(playerTotal)) break;
    }

    displayHands(playerHand, dealerHand, playerTotal, dealerTotal);
    if (checkHand(playerTotal) === 1) {
      displayWinner(playerTotal, dealerTotal, score);
      if (playAgain(score)) {
        continue;
      } else {
        break;
      }

    } else {
      console.log('You chose to stay!');
      console.log(`You're hand total is ${playerTotal}`);
    }

    readline.question('Press <Enter> to continue');

    while (true) {
      displayHands(playerHand, dealerHand, playerTotal, dealerTotal, 1);
      if (checkHand(dealerTotal, 1)) break;
      dealCard(deck, dealerHand);
      dealerTotal = sumHand(dealerHand);
    }

    displayHands(playerHand, dealerHand, playerTotal, dealerTotal, 1);
    if (checkHand(dealerTotal, 1) === 1) {
      displayWinner(playerTotal, dealerTotal, score);
      if (playAgain(score)) {
        continue;
      } else {
        break;
      }

    } else if (checkHand(dealerTotal, 1)) {
      console.log(`The dealer stayed @ ${DEALER_STAY} or above.`);
      console.log(`Dealer hand total is ${dealerTotal}`);
    }

    readline.question('Press <Enter> to continue');

    displayHands(playerHand, dealerHand, playerTotal, dealerTotal, 1);
    displayWinner(playerTotal, dealerTotal, score);

    if (checkScore(score)) break;
    if (!playAgain(score)) break;
  }

  let answer;
  if (checkScore(score)) {
    console.log(`Final Score - Player: ${score.player} | Dealer: ${score.dealer}`);
    console.log(`${checkScore(score)} is the winner out of 5 hands!`);
    console.log('Would you like to play another round of 5? (Y/N)');
    answer = readline.question().toLowerCase()[0];
  }
  if (answer !== 'y') break;
}