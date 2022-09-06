function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);


let a = 1;
let b = 2;
let c = 3;

function primitiveTest(a, b) {
  a = 5;
  b = 6;
  c = 7;
}

primitiveTest(a, b);

console.log(a);
console.log(b);
console.log(c);