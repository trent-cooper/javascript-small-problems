// input: odd integer
// output: logged diamond of '*' with N rows, N width

// explicit:
  // diamond is 4 pointed
  // diamond is drawn on NxN grid

// implicit:
  // n = number of rows
  // n = width of middle row
  // first and last row are always 1 centered '*'
  // diamond is mirrored top to bottom, and side to side

// data: array

// algo:
  // Get half# = Math.ciel(N/2)
  // Initialize array
  // Create loop from 1 - half#
    // First loop = 1 *
    // Last loop = All *
    // # of *s = current loop iteration - X
    // # of spaces = half# - current loop iteration (declare value for each loop) - Y
      // For each iteration
        // create string with Y spaces + X '*'s
        // push string to array
  // Map array, adding current value + current value, reversed, first value removed.
  // Iterate current array, log each line.
  // Pop array, reverse array, log each line.

function diamond(num) {
  let half = Math.ceil(num/2);
  let top = [];

  for (let idx = 1; idx <= half; idx++) {
    let spaces = half - idx;
    let row = ' '.repeat(spaces) + '*'.repeat(idx);
    top.push(row);
  }

  let fullTop = top.map(row => {
    return row + row.split('').reverse().slice(1).join('');
  })

  fullTop.forEach(row => console.log(row));
  fullTop.reverse().slice(1).forEach(row => console.log(row));
}

diamond(3);