function product() {
  return [].reduce.call(arguments, ((total, number) => total * number));
}

let result = product(2, 3, 4, 5);