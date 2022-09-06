const readline = require('readline-sync');
const SQMETER_TO_SQFEET = 10.7639;

let returnArea = (length, width) => length * width;

let returnAreaConvert = (area, unit) => {
  if (unit === 'meters') {
    return area * SQMETER_TO_SQFEET;
  } else if (unit === 'feet') {
    return area / SQMETER_TO_SQFEET;
  }
};

console.log('Please select a unit of measurement (feet/meters)');
let unit = (readline.question()).toLowerCase();
let unitConversion = '';

if (unit === 'meters') {
  unitConversion = 'feet';
} else if (unit === 'feet') {
  unitConversion = 'meters';
}

console.log(`Enter the length of the room in ${unit}:`);
let length = readline.question();

console.log(`Enter the width of the room in ${unit}:`);
let width = readline.question();

let area = (returnArea(length, width)).toFixed(2);
let areaConvert = (returnAreaConvert(area, unit)).toFixed(2);

console.log(`The area of the room is ${area} square ${unit} (${areaConvert} square ${unitConversion}).`);