let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myNewObj = Object.create(myProtoObj);

myNewObj.qux = 3;

console.log(myNewObj);