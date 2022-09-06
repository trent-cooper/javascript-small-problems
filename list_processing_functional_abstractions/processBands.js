let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  let newArr = [];
  data.forEach(band => {
    let newObj = {};
    newObj.name = band.name.split(' ')
                         .map(word => word[0].toUpperCase() + word.slice(1))
                         .map(word => word.split('').filter(char => char !== '.').join(''))
                         .join(' ');
    newObj.country = 'Canada';
    newObj.active = band.active;
    newArr.push(newObj);
  });

  return newArr;
}

console.log(processBands(bands));
console.log(bands);

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]