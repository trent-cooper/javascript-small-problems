// input: 3 integers (no floating point)
// output: string representing type of triangle angle

// rules:
//  sum of angles must be 180
//  all integers must be > 0


// algo:
//    place values in an array
//    check all values > 0 && sum = 180
//    check if any value = 90 -- return 'right'
//    check if any value > 90 -- return 'obtuse'
//    return 'acute'


function triangle(side1, side2, side3) {
  let arr = [side1, side2, side3];

  if (arr.some(side => side <= 0)) return 'invalid';
  if (arr.reduce((acc, next) => acc + next, 0) !== 180) return 'invalid';

  if (arr.some(side => side === 90)) return 'right';
  if (arr.some(side => side > 90)) return 'obtuse';
  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"