// Solution leveraging lexical scoping rules to allow call-back invocation 
//  to access index and arr variables since they've been defined in the forEach
//  function definition. - Could set current index and array name to any variable
//  to allow access from within the call-back.
function forEach(arr, func, thisArg) {
  for (let idx = 0; idx < arr.length; idx++) {
    let index = idx;
    func.call(thisArg, arr[idx]);
  }
}

["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});