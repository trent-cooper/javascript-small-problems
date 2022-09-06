let objToCopy = {
  foo:  1,
  bar:  2,
  qux:  3,
}

function copyObj(obj, arr) {
  let newObj = {};
  Object.assign(newObj, obj)
  
  if (typeof arr === 'undefined') {
    return newObj;
  }

  for (let key in newObj) {
    if (!(arr.includes(key))) {
      delete newObj[key];
    }
  }
  return newObj;
}

console.log(copyObj(objToCopy, [ 'foo', 'bar' ]));

// console.log(copyObj(objToCopy));