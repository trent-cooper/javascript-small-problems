function randomizer() {
  let n = arguments.length * 2;
  let count = 0;

  let stop = setInterval(() => {
    count++
    console.log(count);

    if (count >= n) {
      clearInterval(stop);
    } 
  }, 1000);

  Array.from(arguments).forEach(callback => {
    let randomTime = Math.floor(Math.random() * (n) + 1) * 1000;
    
    setTimeout(callback, randomTime);
  });
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);