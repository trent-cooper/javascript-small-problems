// input: integer > 1752 representing a date
// output: integer representing # of Friday the 13ths that year

// rules:
//    inputted dates are > 1752

// algo:
//  initialize counter variable for # of friday 13ths
//  create a for loop to iterate over the months, 1-12
//  for each iteration, create new date object, passing month and year, checking 13th day of each month
//  pass date to .getDay() method
//  if return is === 5, add 1 to counter
//  return counter total


function fridayThe13ths(year) {
  let count = 0;

  for (let month = 0; month < 12; month++) {
    let date = new Date(`${month}/13/${year}`);
    if (date.getDay() === 5) {
      count++;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2