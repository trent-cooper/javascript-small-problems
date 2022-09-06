// Total line width = Letter idx + 2
//    Firstline = width/2 + A + width/2
//    Inbetweenlines = 
//      space = (width - 2 - idx)/2
//      space + N + idx + N + space
//    Middleline: N + idx# + N


class Diamond {
  static KEY = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  static makeDiamond(n) {
    let idx = Diamond.KEY.indexOf(n);
    let diamondArr = [];
    let after = 0;

    for (let before = idx; before >= 0; before--) {
      let char = Diamond.KEY[after];

      let start = ' '.repeat(before) + char + ' '.repeat(after);
      let end = start.split('').reverse().slice(1).join('');
      let line = start + end;

      diamondArr.push(line);
      after++;
    }

    return this.printDiamond(diamondArr);
  }

  static printDiamond(arr) {
    let top = arr.slice();
    let bottom = arr.reverse().slice(1);
    let diamond = [...top, ...bottom];
    let returnStr = '';

    diamond.forEach(line => returnStr += (line + '\n'));

    return returnStr;
  }
}

module.exports = Diamond;