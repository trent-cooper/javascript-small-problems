document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let result = document.getElementById('result');
  let operation = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '/': (x, y) => x / y,
    '*': (x, y) => x * y,
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let firstNum = document.getElementById('first-number').value;
    let secondNum = document.getElementById('second-number').value;
    let operator = document.getElementById('operator').value;

    let solution = operation[operator](+firstNum, +secondNum);

    result.textContent = `${solution}`;
  })
})