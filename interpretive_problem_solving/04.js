// input: odd integer
// output: string display of *

// rules:
//    input must be >= 7 to display a star
//    input determines both width and height of star
//    middle row contains N stars and no spaces
//    every other row contains 3 stars and N = 3 spaces
//    first line always begins with *
//    line # = number of spaces preceding first *

// (i)*(i)*

function star(num) {
  let halfpoint = Math.floor(num / 2);
  let spaces = halfpoint - 1;

  for (let row = 0; row <= halfpoint; row++) {
    if (row === halfpoint) {
      console.log(`${'*'.repeat(num)}`);
      continue;
    }
    let space = spaces - row;
    console.log(`${' '.repeat(row)}*${' '.repeat(space)}*${' '.repeat(space)}*${' '.repeat(row)}`);
  }

  for (let row = halfpoint - 1; row >= 0; row--) {
    let space = spaces - row;
    console.log(`${' '.repeat(row)}*${' '.repeat(space)}*${' '.repeat(space)}*${' '.repeat(row)}`);
  }
}

star(15);