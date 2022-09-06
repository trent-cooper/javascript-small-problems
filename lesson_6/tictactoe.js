/* eslint-disable max-depth */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const readline = require('readline-sync');
const EMPTY = ' ';
const HUMAN_SELECT = 'X';
const COMP_SELECT = 'O';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const PLAY_ORDER = 'choose';

// eslint-disable-next-line max-statements
function displayBoard(board, matchInfo) {
  console.clear();
  console.log(`Player Score: ${matchInfo.playerScore} | Computer Score: ${matchInfo.computerScore}`);
  console.log(`You are ${HUMAN_SELECT}. Computer is ${COMP_SELECT}.`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[square] = EMPTY;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === EMPTY);
}

function joinOr(board, delim = ', ', vocab = 'or') {
  let emptySq = emptySquares(board);
  let length = emptySq.length;

  if (length > 2) {
    return `${emptySq.slice(0, length - 1).join(delim)}${delim}${vocab} ${emptySq[length - 1]}`;
  } else if (length === 2) {
    return `${emptySq.join(` ${vocab} `)}`;
  } else {
    return emptySq.join();
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    square = readline.question(`Choose an empty square: ${joinOr(board)} => `);

    if (emptySquares(board).includes(square)) break;

    console.log('Sorry, that\'s not a valid choice.');
  }

  board[square] = HUMAN_SELECT;
}

function computerChoosesSquare(board) {
  if (checkDefense(board, COMP_SELECT)) {
    board[checkDefense(board, COMP_SELECT)] = COMP_SELECT;

  } else if (checkDefense(board, HUMAN_SELECT)) {
    board[checkDefense(board, HUMAN_SELECT)] = COMP_SELECT;

  } else if (board['5'] === ' ') {
    board['5'] = COMP_SELECT;

  } else {
    let random = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[random];

    board[square] = COMP_SELECT;
  }
}

function checkDefense(board, marker) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let checkMarker = WINNING_LINES[line].filter(sq => board[sq] === marker);
    let checkEmpty = WINNING_LINES[line].filter(sq => board[sq] === EMPTY);

    if (checkMarker.length === 2 && checkEmpty.length === 1) {
      return checkEmpty[0];
    }
  }

  return null;

}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let [sq1, sq2, sq3] = WINNING_LINES[idx];

    if (
      board[sq1] === HUMAN_SELECT &&
      board[sq2] === HUMAN_SELECT &&
      board[sq3] === HUMAN_SELECT
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMP_SELECT &&
      board[sq2] === COMP_SELECT &&
      board[sq3] === COMP_SELECT
    ) {
      return 'Computer';
    }
  }

  return null;
}

function matchWin(matchInfo) {
  return !!matchWinner(matchInfo);
}

function matchWinner(matchInfo) {
  if (matchInfo.playerScore === 5) {
    return 'Player';
  } else if (matchInfo.computerScore === 5) {
    return 'Computer';
  } else {
    return null;
  }
}

function checkAnswer(answer) {
  while (true) {
    if (answer === 'y') {
      return true;
    } else if (answer === 'n') {
      return false;
    } else {
      console.log('*Please enter either Y or N*');
      answer = readline.question().toLowerCase()[0];
    }
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'p') {
    playerChoosesSquare(board);
  } else if (currentPlayer === 'c') {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return (currentPlayer === 'p') ? 'c' : 'p';
}

while (true) {
  let matchInfo = {
    playerScore: 0,
    computerScore: 0,
  };

  let currentPlayer = PLAY_ORDER.toLowerCase[0];
  if (PLAY_ORDER === 'choose') {
    currentPlayer = readline.question('Who should go first? (Player/Computer): ').toLowerCase()[0];
  }

  while (true) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board, matchInfo);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board, matchInfo);

    if (someoneWon(board)) {
      console.log(`${detectWinner(board)} won this round!`);
      if (detectWinner(board) === 'Player') {
        matchInfo.playerScore++;
      } else if (detectWinner(board) === 'Computer') {
        matchInfo.computerScore++;
      }
    } else {
      console.log("It's a tie!");
    }

    console.log(`Score - You: ${matchInfo.playerScore} | Computer: ${matchInfo.computerScore}`);

    if (matchWin(matchInfo)) {
      console.log(`${matchWinner(matchInfo)} wins the match!`);
      break;
    }

    console.log('Keep going? (y/n)');
    let answer = readline.question().toLowerCase()[0];
    if (!checkAnswer(answer)) break;
  }

  if (matchWin(matchInfo)) {
    console.log('Would you like to play another match? (y/n)');
    let answer = readline.question().toLowerCase()[0];
    if (!checkAnswer(answer)) break;
  } else {
    break;
  }
}

console.log('Thanks for playing Tic Tac Toe!');