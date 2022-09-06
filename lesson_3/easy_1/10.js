let advice = "Few things in life are as important as house training your pet dinosaur.";

let index = advice.indexOf('house');

let newAdvice = advice.slice(0, index);

console.log(newAdvice);

// Expected return value:
// => 'Few things in life are as important as '