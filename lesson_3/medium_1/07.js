let answer = 42;

function messWithIt(someNumber) {
  return (answer += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
console.log(newAnswer);