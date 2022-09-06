function makeCounterLogger(firstNum) {
  return (secondNum) => {
    if (firstNum > secondNum) {
      for (let count = firstNum; count >= secondNum; count--) {
        console.log(count);
      };
    } else if (firstNum < secondNum) {
      for (let count = firstNum; count <= secondNum; count++) {
        console.log(count);
      }
    } else {
      return firstNum;
    }
  }
}

let countlog = makeCounterLogger(5);

countlog(8);

countlog(2);