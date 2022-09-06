const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, arr) {
  return arr.filter(item => item.id === id);
}

function isItemAvailable(id, arr) {
  let filterArr = transactionsFor(id, arr);
  let reduceVal = filterArr.reduce((acc, curr) => {
    if (curr.movement === 'in') {
      return acc + curr.quantity;
    } else {
      return acc - curr.quantity;
    }
  }, 0);

  return reduceVal > 0;
}

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(105, transactions));