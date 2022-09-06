// input: string of short-hand numbers
// output: string of complete numbers

// explicit:
  // each following number in range includes only 'significant' part of number
    // significant defined by number without first character (if >= 10)
      // as first number can be implied by previous numbers
    // 1, 3, 7, 2, 4, 1 === 1, 3, 7, 12, 14, 21
  // some inputs include ranges
    // ranges indicated by '-', ':', '..'
      // ranges are inclusive
        // every number within a range should be included in output

// data structure: array

// algo:
  // parse string to remove spaces
  // split string into an array on '-' ':' '..' ','
  // filter out all ','
  // initialize prevVal
  // map array
    // if ele is Num check if > prevVal
      // if not, num += 10, check again
      // when yes, return value
      // set prevVal to num
  // map new array
    // if '-', ':', '..'
      // access [idx - 1] and [idx + 1]
      // return array of values incrememnting between preceding and following values 
        // non-inclusive
  // return flattened array joined as string with ', '

  function shortHand(string) {
    let str = string.replaceAll(' ', '');
    let strArr = str.split(/(-|:|\.\.|,)/g)
                    .filter(char => char !== ',');

    let prevNum = 0;
    let numArr = strArr.map(char => {
      let num = Number(char);
      if (!Number.isNaN(num)) {
        let inc = 1;
        while (num < prevNum) {
          num = Number(inc + char);
          inc++;
        }
        prevNum = num;
        return num;
      }

      return char;
    });

    let fullArr = numArr.map((char, idx) => {
      if (char === '-' || char === ':' || char === '..') {
        let prev = numArr[idx - 1];
        let next = numArr[idx + 1];
        let returnArr = [];
        for (let count = prev + 1; count < next; count++) {
          returnArr.push(count);
        }
        return returnArr;
      }
      return char;
    });

    return fullArr.flat().join(', ');
  }

  console.log(shortHand("1, 3, 7, 2, 4, 1"));
  console.log(shortHand("1-3, 1-2"));
  console.log(shortHand("1:5:2"));
  console.log(shortHand("104-2"));
  console.log(shortHand("104-02"));