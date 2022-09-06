"use strict";

class Cipher {
  static KEY = 'abcdefghijklmnopqrstuvwxyz'.repeat(2);

  static encode(str) {
    let strArr = str.split('');

    return strArr.map(char => this.checkChar(char))
                 .join('');
  }

  static checkChar(char) {
    if ((/[a-zA-Z]/).test(char)) {
      return this.newChar(char);
    }

    return char;
  }

  static newChar(char) {
    let upper = (char.toUpperCase() === char);
    let index = this.KEY.indexOf(char.toLowerCase()) + 13;
    let returnChar = this.KEY[index];

    return (upper) ? returnChar.toUpperCase() : returnChar;
  }
}

module.exports = Cipher;