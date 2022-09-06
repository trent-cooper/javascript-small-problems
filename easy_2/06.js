function penultimate(string) {
  let array = string.split(' ');
  return array[array.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function middleString(string) {
  let array = string.split(' ');
  if (array.length <= 2) {
    return 'You either entered a string with only 2 or less words, or an empty string, there is no middle word...';
  } else if (array.length % 2 === 0) {
    return `You entered a string with an even number of words, there is no middle word...`;
  } else {
    return array[Math.ceil(array.length / 2)];
  }
}