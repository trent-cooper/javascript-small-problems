let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let array = statement1.split('').filter(letter => letter === 't').length;
console.log(array);

let array2 = statement2.split('').filter(letter => letter === 't').length;
console.log(array2);