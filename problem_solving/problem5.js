// input: string of only capital letters, # of rails
// output: decrypted string

// implicit:
  // decrypted message



function decrypt(string, rows) {
  let length = string.length;
  let str = string;
  let row = 0;
  let flag = true;
  let arr = createArr(length, rows);

  for (let clm = 0; clm < length; clm++) {
    arr[row][clm] = '!';

    if (row === 0) {
      flag = true;
    } else if (row === rows - 1) {
      flag = false;
    }

    row = incRow(row, flag);
  }

  for (let row = 0; row < arr.length; row++) {
    for (let clm = 0; clm < length; clm++) {
      if (arr[row][clm] === '!') {
        arr[row][clm] = str[0];
        str = str.slice(1);
      }
    }
  }
  arr.forEach(row => console.log(row.join(' ')));

}

function incRow(row, flag) {
  if (flag) {
    return row + 1;
  } else {
    return row - 1;
  }
}

function createArr(length, rows) {
  let arr = [];

  for (let row = 0; row < rows; row++) {
    arr.push([]);
    for (let count = 0; count < length; count++) {
      arr[row].push('*');
    }
  }

  return arr;
}

decrypt("WECRLTEERDSOEEFEAOCAIVDEN", 3);
// WECRLTEERDSOEEFEAOCAIVDEN
// 1       1       1       1
//  2     2 2     2 2     2 
//   3   3   3   3   3   3  