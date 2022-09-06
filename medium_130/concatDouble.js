// concatDouble.js

const { getValues, addString } = require('./addString.js');

function double(value) {
  return value + value;
}

function concatDouble() {
  return getValues().reduce((result, value) => {
    return result + double(value);
  });
}

module.exports = { concatDouble, addString };