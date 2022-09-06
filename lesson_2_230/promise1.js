let p = new Promise((resolve, reject) => {
  let time = Math.floor(Math.random() * 5000);

  setTimeout(() => {
    resolve('Success!')
  }, 2000);

  setTimeout(() => {
    reject('Failure!')
  }, time)
})

p.then((resolution) => {
  console.log(resolution);
}, (rejection) => {
  console.log(rejection);
})