// input: odd integer (N)
// output: logged string of 8-point star in NxN grid

// explicit:
  // Star is xN rows height
    // Middle row is vertical line of stars
  // Middle row is xN width, all starts

// implicit:
  // All rows (not middle) contain 3 stars
    // These rows contain (N - 3) spaces
  // Star shape is mirrored along middle row vertically/horizontally
  // halfSpaces = (N - 3)/2
  // halfWidth = Math.ciel(N / 2)
  // [0] Row: star @ [0]
  // [1] Row: star @ [1]

// data: array

// algo: 
  // create empty array
  // initialize halfWidth variable
  // create outer loop for row iteration : 0 < (halfWidth - 1)
    // push [] to array
    // create inner loop for column iteration : 0 < halfWidth
      // for each iteration
      // if (idx === row# || idx === halfWidth - 1)
        // push '*' to array[row#]
      // else
        // push ' ' to array[row#]
  // map array
    // return row + row.reverse().slice(1)
  // initialize bottom half array = array.slice().reverse()
  // push new Array(N).fill('*') into Top array
  // concatatinate bottom array to top array
  // iterate over array, log each row joined
  
  
function star(num) {
  let arr = [];
  let halfWidth = Math.ceil(num / 2);

  for (row = 0; row < (halfWidth - 1); row++) {
    arr.push([]);
    for (clm = 0; clm < halfWidth; clm++) {
      if (clm === row || clm === (halfWidth - 1)) {
        arr[row].push('*');
      } else {
        arr[row].push(' ');
      }
    }
  }

  let topArr = arr.map(row => row.concat(row.slice().reverse().slice(1)));
  let bottomArr = topArr.slice().reverse();
  topArr.push(new Array(num).fill('*'));

  topArr.concat(bottomArr).forEach(row => console.log(row.join('')));
}

star(11);