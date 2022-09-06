function swapName(name) {
  let nameArr = name.split(' ');
  return nameArr.splice(-1) + ', ' + nameArr.join(' ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"