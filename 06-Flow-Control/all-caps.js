let allCaps = (statement) => {
  if (statement.length > 10) {
    return statement.toUpperCase();
  } else {
    return statement;
  }
}

console.log(allCaps('goodbye'));

//OR:

let allCaps2 = (statement) => ((statement.length > 10) ? statement.toUpperCase() : statement);

console.log(allCaps2('hello world'));