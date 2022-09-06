let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let minAge = 10000;

Object.values(ages).forEach(age => {
  if (age < minAge) {
    minAge = age;
  }
});

console.log(minAge);