// input: create instance object of series type, inputting number as string
//    call .slices() on object with slice length
// output: array containing each slice a subarray, each number stored as seperate element

// to find substrings:
//  check if slice # > string.length - throw error
//  
//  iterate over string
//    from 0 to (string.length - slice#)
//    for each, slice(idx, slice#)
//    push slicevalue.split('') to holder array
//  return holder array

class Series {
  constructor(stringNum) {
    this.num = stringNum;
  }

  slices(sliceNum) {
    this.checkValid(sliceNum);

    let max = this.num.length - sliceNum;
    let sliceArr = [];

    for (let idx = 0; idx <= max; idx++) {
      let sliceValueString = this.num.substr(idx, sliceNum).split('');
      let sliceValueNum = sliceValueString.map(string => Number(string));
      sliceArr.push(sliceValueNum);
    }

    return sliceArr;
  }

  checkValid(sliceNum) {
    if (sliceNum > this.num.length) {
      throw new Error('Slice value invalid');
    }
  }
}

module.exports = Series;