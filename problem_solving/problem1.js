// input: phone-number as a string in any possible format
// output: string representation of phone number as sanitized 10-digit number

// explicit:
  // if number contains less than 10 or more than 11 digits, return 10 0s
  // if number contains 10 digits, number is valid
  // if number contains 11 digits, check first number
    // if 1, remove from string - remainder is valid
    // if != 1, invalid - return 10 0s

// datatype:
  // Can directly sanatize and parse string.  Input + output are string

// algo:
  // create INVALID variable to hold invalid return value
  // sanatize string by removing all non-number characters using replace regex
  // check sanatized string length
    // if length < 10 || length > 12 - return INVALID
    // if length === 10, return string
    // if length === 11, check value of string[0]
      // if first char === 1, return string.slice(1)
      // if first char !== 1, return INVALID



// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.


function phoneNumber(string) {
  const INVALID = '0000000000';
  if (typeof string !== 'string') return INVALID;

  let sanitized = string.replace(/[^0-9]/g, '');

  if (sanitized.length === 10) return sanitized;
  if (sanitized.length === 11 && sanitized[0] === '1') return sanitized.slice(1);
  
  return INVALID;
}

console.log(phoneNumber('1-260-414-3238'));
console.log(phoneNumber('260-414-3238'));
console.log(phoneNumber('1-2604-414-3238'));
console.log(phoneNumber('260.414.3238'));
console.log(phoneNumber('260.A43-5214'));
console.log(phoneNumber(''));
console.log(phoneNumber(260-414-3238));