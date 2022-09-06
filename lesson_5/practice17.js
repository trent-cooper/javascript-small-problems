const UUID_KEY = '0123456789abcdef';

function returnUUID() {
  let structure = '00000000-0000-0000-0000-000000000000'.split('');

  let uuidArr = structure.map(num => {
    let random = Math.floor(Math.random() * 16);
    if (num === '0') {
      return UUID_KEY[random];
    } else {
      return '-';
    }
  });

  return uuidArr.join('');

}

console.log(returnUUID());
