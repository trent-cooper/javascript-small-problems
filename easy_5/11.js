function timeOfDay(input) {
  let raw;

  if (input < 0) {
    input %= 1440;
    raw = input + 1440;
  } else if (input >= 0) {
    raw = input % 1440;
  }

  let hrs = Math.floor(raw / 60);
  let mins = raw % 60;

  return `${addZero(hrs)}:${addZero(mins)}`;
}

function addZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));