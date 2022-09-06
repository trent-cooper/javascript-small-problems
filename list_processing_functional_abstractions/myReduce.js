function myReduce(array, func, initial) {
  let currVal;
  let idx;
  if (initial) {
    currVal = initial;
    idx = 0;
  } else {
    currVal = array[0];
    idx = 1;
  };

  for (idx; idx < array.length; idx++) {
    currVal = func(currVal, array[idx], idx, array);
  }

  return currVal;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49


/////////

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"