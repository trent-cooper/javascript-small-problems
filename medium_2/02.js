// input: 3 integers (can be floating point)
// output: string

// rules:
//    If any integer input is 0, return 'invalid'
//    If 2 smallest integers sum is less than largest integer, return 'invalid'
//    If all integers are equal to each other, return 'equilateral'
//    If 2 integers are same, and 3rd is valid, return 'isosceles'
//    If all integers different, return 'scalene'


// algo:
//    Check if any input === 0, return 'invalid'
//    Set new array with inputs as elements
//    Sort array in ascending order
//    Check sum of element 0 and 1 > element 2
//      If false: return 'invalid' 
//    If true:
//      Check if element 2 and 3 are equal
//        If true:
//          Check if element 1 and 2 are equal
//            If true: 
//               return 'equilateral'
//            If false:
//                return 'isosceles'
//        If false:
//          return 'scalene'


function triangle(side1, side2, side3) {
  let arr = [side1, side2, side3];

  if (arr.some(side => side === 0)) {
    return 'invalid';
  }

  arr.sort((a, b) => a - b);

  if ( (arr[0] + arr[1]) > arr[2] ) {
    if (arr[1] === arr[2]) {
      if (arr[0] === arr[1]) {
        return 'equilateral';
      }
      return 'isosceles';
    }
    return 'scalene';
  }

  return 'invalid';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"