function isColorValid(color) {
  return (color === "blue" || color === "green");
}

const isColorValid2 = color => color === 'blue' || color === 'green';

const isColorValid3 = color => ['blue', 'green'].includes(color);

console.log(isColorValid('blue'));
console.log(isColorValid('red'));

console.log(isColorValid2('blue'));
console.log(isColorValid2('red'));

console.log(isColorValid3('blue'));
console.log(isColorValid3('red'));