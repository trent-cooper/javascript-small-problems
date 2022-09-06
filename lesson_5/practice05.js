let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let values = Object.values(munsters);

let sum = 0;

values.forEach((value) => {
  if (value.gender === 'male') {
    sum += value.age;
  }
});

console.log(sum);