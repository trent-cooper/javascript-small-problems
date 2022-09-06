/* eslint-disable max-len */
// input: array
// output: same array

// rules:
//  array is 2+ elements
//  must return same array, mutated in place
//  array can contain numbers or strings

// algo:
//  create exterior loop (while)
//    condition = binary switch
//    nest a iteration over array
//      create binary variable to indicate whether a swap was made - initialized as false
//      within iteration, compare each element pair
//        if 1st element > 2nd element, set element 1 = element 2, and element 2 = element 1
//          reassign swap variable to true
//        if not, keep in place, continue iteration
//


function bubbleSort(arr) {
  while (true) {

    let swapIndicator = true;

    // Iteration over arr x1
    for (let idx = 0; idx < arr.length; idx++) {
      if (arr[idx] > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        swapIndicator = false;
      }
    }

    if (swapIndicator) break;
  }

  return arr;
}

let testArr = [6, 2, 7, 1, 4];
console.log(bubbleSort([5, 3]));
console.log(bubbleSort(testArr));
console.log(bubbleSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
