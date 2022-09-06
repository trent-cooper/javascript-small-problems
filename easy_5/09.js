let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let objCount = {};

  arr.forEach(vehicle => {
    if (objCount.hasOwnProperty(vehicle)) {
      objCount[vehicle] += 1;
    } else {
      objCount[vehicle] = 1;
    }
  });

  for (let vehicle in objCount) {
    console.log(`${vehicle} => ${objCount[vehicle]}`);
  }
}


countOccurrences(vehicles);