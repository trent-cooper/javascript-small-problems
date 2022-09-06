function startCounting() {
  let count = 1;

  setInterval(() => {
    console.log(count);
    count++;
  }, 1000);
}

let counterID = startCounting();

startCounting();

function stopCounting() {
  clearInterval(counterID);
}

 