// input: 2 version numbers (string? number? will assume number for now)
// output: 1, -1 to reflect which version is more revent, 0 if versions are same, null if input contains 
    // characters that aren't digits or '.'

// explicit:
  // if vers1 > vers2, return 1
  // if vers1 < vers2, return -1
  // if vers1 === vers2, return 0
  // if vers1 || vers2 contains invalid characters, return null

// implicit:
  // versions are compared by each number(s) delineated by '.'
  // version numbers are compared left to right
  // each 'section' is compared as it's own number, we are not treating inputs as
    // floating point numbers that can be compared directly
    // ie. although the floating point number 1.2 > 1.18, version numbers compare 1 === 1, followed
    // by 18 > 2, thus 1.18 > 1.2
  // 1 === 1.0 
    // Unsure if 1.0.4 is a valid input, or if 0s always come at end of version num

// algo:
  // validate input in seperate function, using regex test - return null if fails
    // verify inputs contain only numbers and '.'
    // starts with num
    // single '.' between each number section
    // ends with num
  // split inputs with '.' as delimiter into an array, assign to variables
  // iterate over each 'section' using a for loop to allow breaking loop early
    // compare array lengths and use largest as loop number
    // for each iteration, compare each array[idx]
      // if an element is undefined, treat as 0
      // if a section is larger than other, return 1 or -1
  // if loop runs to completion, return 0




// Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.


// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37


function compareVersions(version1, version2) {
  if (!validateInput(version1, version2)) return null;

  let ver1 = version1.split('.');
  let ver2 = version2.split('.');

  let loop = ver1.length > ver2.length ? ver1.length : ver2.length;

  for (let idx = 0; idx < loop; idx++) {
    let sec1 = ver1[idx] ? Number(ver1[idx]) : 0;
    let sec2 = ver2[idx] ? Number(ver2[idx]) : 0;

    if (sec1 > sec2) {
      return 1;
    } else if (sec2 > sec1) {
      return -1;
    };
  }

  return 0;
}

function validateInput(ver1, ver2) {
  let regex = /^[0-9]+(.[0-9]+)*$/;

  return regex.test(ver1) && regex.test(ver2);
}

console.log(compareVersions('0.1', '1')); // -1
console.log(compareVersions('1', '1.0')); // 0
console.log(compareVersions('1.18.2', '1.2.0.0')); // 1
console.log(compareVersions('1.2.0.0', '1.2')); // 0
console.log(compareVersions('1.18', '1.2')); // 1
console.log(compareVersions('1.0', '1.0.5')); // -1
console.log(compareVersions('0.1H', '1')); // null
console.log(compareVersions('.1', '1')); // null
console.log(compareVersions('0..1', '1')); // null
console.log(compareVersions('0.1', '1.0.')); // null

