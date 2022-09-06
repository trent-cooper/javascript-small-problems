const multiply = (num1, num2) => num1 * num2;

const square = (num) => multiply(num, num);

const powerTo = (num, nth) => {
  let result = num;
  for (let i = 1; i < nth; i++) {
    result = multiply(result, num);
  }
  return result;
};

console.log(powerTo(5, 5));