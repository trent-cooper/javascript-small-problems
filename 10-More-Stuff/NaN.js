let test = Math.sqrt(-1);

let isNotANumber = value => {
  if (value !== value) {
    return true;
  } else {
    return false;
  }
}

console.log(isNotANumber(test));


