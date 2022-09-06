"use strict";

function bind(obj, func) {
  return function() {
    func.call(obj);
  }
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }