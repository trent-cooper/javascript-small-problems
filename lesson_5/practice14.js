let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];

for (let key in obj) {
  if (obj[key].type === 'fruit') {
    let colorArray = obj[key].colors;

    let colorUpper = colorArray.map(color => {
      return color[0].toUpperCase() + color.substring(1);
    });

    arr.push(colorUpper);

  } else {
    arr.push(obj[key].size.toUpperCase());
  }
}

console.log(arr);