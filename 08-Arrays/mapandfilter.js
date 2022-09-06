let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let arrLength = arr.map(string => string.length);

let arrOddLength = arrLength.filter(length => length % 2 !== 0);

console.log(arrOddLength);