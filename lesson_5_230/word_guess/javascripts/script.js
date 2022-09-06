$(function() {

  let randomWord = (function() {
    let arr = ['apple', 'banana', 'orange', 'pear'];

    return function () {
      if (arr.length === 0) return undefined;
      let idx = Math.floor(Math.random() * arr.length);
      return arr.splice(idx, 1)[0].toUpperCase();
    }
  })();

  class Game {
    constructor() {
      this.word = randomWord();
      this.guesses = 0;
      this.letters = [];
      this.maxGuesses = 6;
    }

    initializeGame() {
      $('#replay').hide();
      $('#apples').removeClass();
      $('body').removeClass();
      $('#message').empty();
      this.bindListeners();
      if (!this.word) {
        this.displayMessage("We're all out of words!");
        return;
      }
      this.displayWord();
      this.displayGuesses();
    }

    bindListeners() {
      $('*').on('keydown', this.enterGuess.bind(this));
    }

    enterGuess(e) {
      let key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key) && !this.letters.includes(key)) {
        this.checkLetter(key);
        this.letters.push(key);
        this.displayWord();
        this.displayGuesses();  

        this.checkGame();
      }
    }

    checkLetter(char) {
      if (this.word.includes(char)) return;

      this.guesses++;
      $('#apples').attr('class', `guess_${this.guesses}`);
    }

    checkGame() {
      if (this.guesses === this.maxGuesses) {
        this.gameLost();
      }

      if (this.word.split('').every(char => this.letters.includes(char))) {
        this.gameWon();
      }
    }

    displayWord() {
      let wordArr = this.word.split('');
      let $displayWord = $.parseHTML(this.updateWord(wordArr));
      $('#spaces h2').nextAll().remove();
      $('#spaces').append($displayWord);
    }

    displayGuesses() {
      let guessHTML = this.letters.reduce((acc, curr) => acc + `<span>${curr}</span>`, '');
      let $guesses = $.parseHTML(guessHTML);
      $('#guesses h2').nextAll().remove();
      $('#guesses').append($guesses);
    }

    updateWord(wordArr) {
      return wordArr.reduce((acc, curr) => {
        if (this.letters.includes(curr)) {
          return acc + `<span>${curr.toUpperCase()}</span>`;
        } else {
          return acc + '<span></span>';
        }
      }, '');
    }

    displayMessage(str) {
      $('#message').text(str);
    }

    gameLost() {
      $('*').off('keydown');
      this.displayMessage('You lose :( Better luck next time!');
      $('#replay').show();
      $('body').addClass('lose');
    }

    gameWon() {
      $('*').off('keydown');
      this.displayMessage('You win!');
      $('#replay').show();
      $('body').addClass('win');
    }

  }

  $('#replay').on('click', (e) => {
    e.preventDefault();
    let newGame = new Game();
    newGame.initializeGame();
  })

  let game = new Game();
  game.initializeGame();
})
