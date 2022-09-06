let repeat = (num, string) => {
  let repeatString = '';
  for (let i = 0; i < num; i++) {
    repeatString += string;
  }
  return repeatString;
}

console.log(repeat(3, 'ha'));