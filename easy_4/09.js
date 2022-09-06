function wordSizes(string) {
  let obj = {};
  let arr = string.split(' ');

  let arrParse = letterOnly(arr);

  arrParse.forEach(word => {
    if (obj.hasOwnProperty(word.length)) {
      obj[word.length] += 1;
    } else {
      obj[word.length] = 1;
    }
  });

  return obj;
}

function letterOnly(arr) {
  return arr.map(word => {
    let charArr = word.toLowerCase().split('');

    let letterArr = charArr.filter(char => {
      return (char >= 'a' && char <= 'z');
    });

    return letterArr.join('');
  });
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}