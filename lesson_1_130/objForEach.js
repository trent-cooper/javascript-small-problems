function objForEach(obj, func) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      func(prop, obj[prop]);
    }
  }
}

let obj = { foo: 1, bar: 2, qux: 3 };
objForEach(obj, (property, value) => {
  console.log(`the value of ${property} is ${value}`);
});