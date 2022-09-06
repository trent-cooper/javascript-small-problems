function afterMidnight(stringTime) {
  let timeArr = stringTime.split(':');
  let hrs = Number(timeArr[0]);
  let mins = Number(timeArr[1]);
  let total = ((hrs * 60) + mins);
  return total % 1440;
}

function beforeMidnight(stringTime) {
  let timeArr = stringTime.split(':');
  let hrs = Number(timeArr[0]);
  let mins = Number(timeArr[1]);
  let total = (hrs * 60) + mins;
  let before = 1440 - total;
  if (before === 1440) {
    before = 0;
  }
  return before;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);