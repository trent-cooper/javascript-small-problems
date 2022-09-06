// input: n - number of switches / number of passes
// output: array of switched that are ON.

// explicit:
  // there are 1 to n switches
  // switches are initially in an OFF state.
  // on first pass, every switch is toggled ON.
    // on 2nd pass, every 2nd switch is toggled
    // on 3rd pass, every 3rd switch is toggled
  // n passes are made

// implicit:
  // switches have only 2 states: ON and OFF
  // The number of the pass, is equal to the 'ever Nth switch toggle' for that pass
  // Return array contains the actual switch number - NOT zero indexed.
  // Switch range is inclusive of 1 and N.
  // Each pass starts @ switch #1
  
// data structure: array - containing boolean values.

// algo: 
//  create array, filled with N false elements.
//  create a loop that runs N times
  //  transform array
  //    for Each transformation, if switch# % loop# === 0, toggle switch
  //    switch# = idx + 1;
//  transform array
      // if value = true, return idx + 1
//  filter array
      // remove all false values
//  return array

function lightsOn(switches) {
  let arr = new Array(switches).fill(false);
  
  let loopCount = 1;
  while (loopCount <= switches) {
    arr = arr.map((ele, idx) => {
      let switchNum = idx + 1;
      if (switchNum % loopCount === 0) {
        return !ele;
      }
      return ele;
    });

    loopCount++;
  }

  let mapArr = arr.map((ele, idx) => {
    if (ele) {
      return idx + 1;
    } else {
      return false;
    }
  });

  return mapArr.filter(ele => ele !== false);
}

console.log(lightsOn(100));
