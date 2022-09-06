class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}


// Initial solution using .bind guard clause
// function forEach(arr, func, thisArg) {
//   if (thisArg) {
//     func = func.bind(thisArg);
//   }
//   for (let idx = 0; idx < arr.length; idx++) {
//     func(arr[idx]);
//   }
// }

// Solution using .call
function forEach(arr, func, thisArg) {
  for (let idx = 0; idx < arr.length; idx++) {
    func.call(thisArg, arr[idx]);
  }
}

let foo = new Foo("Item: ");
forEach(["a", "b", "c"], item => console.log(item));
forEach([1, 2, 3], foo.showItem, foo);
forEach([4, 5, 6], foo.showItem);