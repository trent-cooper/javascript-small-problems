function delayLog() {
  for (var idx = 1; idx <= 10; idx++) {
    setTimeout(() => console.log(idx), idx * 1000);
  };
}

delayLog();