// input: odd integer
// output: string display of diamond made of *

// rules: 
//  input always odd integer
//  diamond grid is n x n

// algo:
//  all lines are n width
//  loop to create xN rows
//  first line is x1 * @ half point index position
//  2nd line is x3 *
//  each proceeding line is + 2 * until middle row is hit
//  middle row is all *
//  loop repeats itself in reverse

// 1, 3, 5, 7

function diamond(size) {
  let halfPoint = Math.round(size / 2);
  let counter = 1;

  for (let row = 1; row <= halfPoint; row++) {
    let startSpace = (size - counter) / 2;
    console.log(`${' '.repeat(startSpace)}${'*'.repeat(counter)}`);
    counter += 2;
  }

  counter -= 4;

  for (let row = halfPoint - 1; row >= 1; row--) {
    let startSpace = (size - counter) / 2;
    console.log(`${' '.repeat(startSpace)}${'*'.repeat(counter)}`);
    counter -= 2;
  }
}

diamond(15);