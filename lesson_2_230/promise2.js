let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error: Not Launch School');
  }, 2000)
})

p.catch(err => {
  console.log(err)
});