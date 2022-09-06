function delayLog() {
  for (let idx = 1; idx <= 10; idx++) {
    setTimeout(() => console.log(idx), idx * 1000);
  };
}

delayLog();