function binarySearch(arr, match) {
  let breakpoint = (arr.length / 2);

  if (arr[breakpoint] === match) {
    return breakpoint;
  } else if (arr.length === 1) {
    return -1;
  } else if (arr[breakpoint] < match) {
    binarySearch(arr.slice(0, breakpoint), match);
  } else {
    binarySearch(arr.slice(breakpoint + 1), match);
  }

  return -1;
}

// let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
// binarySearch(yellowPages, 'Apple Store');                // 0

// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
// binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6