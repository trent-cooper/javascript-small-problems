function myBind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

let obj = {
  name: 'jeff',
}

function sayNums(num1, num2, num3) {
  console.log(num1);
  console.log(num2);
  console.log(num3);
}

let invok = myBind(sayNums, obj);

invok(1, 2, 3);