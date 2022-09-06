let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = [];

for (let prop in vehicle) {
  keys.push(prop);
}

console.log(keys);