/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
// input: integer
// output: array of lights currently on

// algo:
//    declare holder object to define light's on/off status
//    for the first pass, declare a property of switch #, and a value of true
//    for all even loop passes past #1, 'flip' ever other switch starting w/ even number
//    for all odd loop passes past #1, 'flip' every other switch starting w/ odd number
//    after defined number of passes, export object data to array, and filter array according to truthiness


function lightsOn(count) {
  let lightStatus = {};

  for (let pass = 1; pass <= count; pass++) {
    if (pass === 1) {
      for (let light = 1; light <= count; light++) {
        lightStatus[light] = true;
      }
      continue;
    }

    for (let light = pass; light <= count; light += pass) {
      lightStatus[light] = !lightStatus[light];
    }
  }

  let resultArr = Object.entries(lightStatus).filter(light => light[1] === true);
  resultArr = resultArr.map(light => Number(light[0]));

  console.log(resultArr);
}

lightsOn(100);