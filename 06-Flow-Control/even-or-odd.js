let evenOrOdd = (input) => {
  if (Number.isInteger(input)) {
    if ((input % 2) === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('error: must submit an integer')
  }
}

evenOrOdd(4);