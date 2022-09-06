"use strict";

function makeList() {
  let list = [];
  return (input = 'printList') => {
    if (input === 'printList' && list.length > 0) {
      list.forEach(item => console.log(item));
    } else if (input === 'printList' && list.length === 0) {
      console.log('The list is empty.');
    } else if (list.includes(input)) {
      let idx = list.indexOf(input);
      console.log(`${list.splice(idx, 1)} removed!`);
    } else {
      list.push(input);
      console.log(`${input} added!`);
    }
  } 
}

let list = makeList();

list('make breakfast');

list('read book');

list();

list('make breakfast');

list();