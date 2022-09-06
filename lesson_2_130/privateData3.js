"use strict";

function makeList() {
  let list = [];

  return {
    add(input) {
      list.push(input);
      console.log(`${input} added!`);
    },

    remove(input) {
      let idx = list.indexOf(input);
      if (idx === -1) {
        console.log('That item is not on your list');
      } else {
        console.log(`${list.splice(idx, 1)} removed!`);
      }
    },

    list() {
      if (list.length === 0) {
        console.log('The list is empty.');
      } else {
        list.forEach(item => console.log(item));
      }
    },
  }
}

let list = makeList();

list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();