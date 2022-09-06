function makeMultipleLister(num) {
  return function() {
    let multiplier = 1;
    while (true) {
      let result = num * multiplier;
      if (result >= 100) break;
      console.log(result);
      multiplier++;
    }
  }
}

let lister = makeMultipleLister(17);
lister();