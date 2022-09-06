let removeLastChar = string => {
  let array = string.split('');
  array.pop();
  return array.join('');
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'