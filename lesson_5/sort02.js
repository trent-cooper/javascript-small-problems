let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  let totalA = a.reduce((initial, next) => initial + next, 0);
  let totalB = b.reduce((initial, next) => initial + next, 0);

  return totalA - totalB;
});

console.log(scores);