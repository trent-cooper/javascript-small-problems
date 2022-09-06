let calculateBMI = (height, weight) => (( weight / (( height / 100 )**2 ))).toPrecision(4);

//Easier to Read:

let calculateBMI2 = (height, weight) => {
  let heightConversion = height / 100;
  let bmi = weight / heightConversion**2;
  return bmi.toPrecision(4);
}


console.log(calculateBMI(180, 80)); // "24.69"

console.log(calculateBMI2(180, 80));