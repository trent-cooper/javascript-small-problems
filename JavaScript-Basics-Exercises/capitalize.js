let capitalize = (string) => {
  let stringArray = string.split(' ');
  let newArray = [];
    for (let i = 0; i < stringArray.length; i++) {
      newArray.push(stringArray[i][0].toUpperCase() + stringArray[i].slice(1));
    }
  return newArray.join(' ');
}

console.log(capitalize('launch school tech & talk'));