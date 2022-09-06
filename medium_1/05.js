const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  let stringEdit = string;

  for (let idx = 0; idx < numArr.length; idx++) {
    stringEdit = stringEdit.replaceAll(numArr[idx], idx);
  }

  return stringEdit;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."