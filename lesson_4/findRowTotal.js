let incrementer;

function findRowTotal(row) {
  incrementer = 2;
  let currentRow = 1;
  let total = 0;
  while (currentRow <= row) {
    total = returnRowSum(currentRow);
    currentRow++;
  }
  console.log(total);
}

function returnRowSum(currentRow) {
  let rowTotal = 0;
  for (let i = 1; i <= currentRow; i++) {
    rowTotal += incrementer;
    incrementer += 2;
  }
  return rowTotal;
}

findRowTotal(1);
findRowTotal(2);
findRowTotal(3);
findRowTotal(4);
console.log(incrementer)