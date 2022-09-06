function later(func, arg) {
  return function() {
    func(arg);
  }
}