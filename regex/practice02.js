function fields(string) {
  return (string.match(/\b\w+\b/g));
}

console.log(fields("Pete,201,Student"));
// -> ['Pete', '201', 'Student']

console.log(fields("Pete \t 201    ,  TA"));
// -> ['Pete', '201', 'TA']

console.log(fields("Pete \t 201"));
// -> ['Pete', '201']

console.log(fields("Pete \n 201"));
// -> ['Pete', '\n', '201']