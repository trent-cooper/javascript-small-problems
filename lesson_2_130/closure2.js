// Didn't need to do this problem with the count variable defined as private data

function addAndSubtract() {
  let count = 0;

  const add = function(num) {
    count += num;
    console.log(count);
  }

  const sub = function(num) {
    count -= num;
    console.log(count);
  }

  return [add, sub];
}

let addSubFuncs = addAndSubtract();
let add = addSubFuncs[0];
let subtract = addSubFuncs[1];

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10