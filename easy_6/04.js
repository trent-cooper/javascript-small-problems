function centerOf(string) {
  let stringArr = string.split('');
  let half = Math.floor(string.length / 2);

  if (string.length % 2 === 0) {
    console.log(stringArr[half - 1] + stringArr[half]);
  } else {
    console.log(stringArr[half]);
  }

}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"