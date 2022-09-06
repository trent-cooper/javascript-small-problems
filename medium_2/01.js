/* eslint-disable max-len */
// input: string

// output: object
//    object contains:
//      % of characters that are lowercase letters
//      % of characters that are uppercase letters
//      % of characters that are neither
// rules:
//    string will always be 1+ characters
//    spaces are characters
//    percentages stored as floating point number to 2nd decimal place, as a string

// algo:
//  create x3 holder arrays for lowercase, uppercase and neither
//  iterate over string, character by character
//    process if character or other
//      if letter, check captilization and push to appropriate array
//      if not letter, push to 'neither' array
//  compare intial string length to each array length to calculate percentage
//  create object literal, with requested properties, and coordinating percentage values (as strings)


function letterPercentages(str) {
  let lowerArr = [];
  let upperArr = [];
  let otherArr = [];

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    if (char >= 'a' && char <= 'z') {
      lowerArr.push(char);
    } else if (char >= 'A' && char <= 'Z') {
      upperArr.push(char);
    } else {
      otherArr.push(char);
    }
  }

  let percentObj = {};

  percentObj.lowercase = percent(lowerArr, str);
  percentObj.uppercase = percent(upperArr, str);
  percentObj.neither = percent(otherArr, str);

  return percentObj;
}


function percent(arr, str) {
  let initialPercent = (arr.length / str.length) * 100;
  return String(initialPercent.toFixed(2));
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }