let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let arr = Object.entries(munsters);

arr.forEach(person => {
  let name = person[0][0].toUpperCase() + person[0].substring(1);
  console.log(`${name} is a ${person[1].age}-year-old ${person[1].gender}`);
});