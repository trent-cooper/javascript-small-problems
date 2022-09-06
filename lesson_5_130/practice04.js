setTimeout(function() { // 1
  setTimeout(function() {
    q();
  }, 15);

  d();

  setTimeout(function() {
    n();
  }, 5);

  z();
}, 10);

setTimeout(function() { // 2
  s();
}, 20);

setTimeout(function() { // 3
  f();
});

g(); // 4

// g(), f(), d(), z(), n(), s(), q()