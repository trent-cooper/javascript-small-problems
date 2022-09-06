"use strict";
const readline = require('readline-sync');

let Account = function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;
  const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

  function randomChar() {
    let idx = Math.floor(Math.random() * 37);
    return CHARS[idx];
  }

  function newDisplayName() {
    let name = new Array(16).fill('*');

    return name.map(_ => randomChar()).join('');
  }

  function checkPassword(pass) {
    return userPassword === pass;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = newDisplayName();
      return this;
    },

    reanonymize(pass) {
      if (checkPassword(pass)) {
        this.displayName = newDisplayName();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword() {
      let pass = readline.question('Please enter current password: ');

      if (checkPassword(pass)) {
        userPassword = readline.question('Enter new password: ');
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(pass) {
      if (checkPassword(pass)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(pass) {
      if (checkPassword(pass)) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(pass) {
      if (checkPassword(pass)) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },    
  }
};

let test = Object.create(Account()).init('trent@email.com', '12345', 'Trent', 'Cooper');
let fooBar = Object.create(Account()).init('foo@bar.com', '123456', 'foo', 'bar');


console.log(test.displayName);
console.log(test.firstName('12345'))



console.log(fooBar.displayName);
console.log(fooBar.firstName('123456'))
