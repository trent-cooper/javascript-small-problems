function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let baz = foo(1, 2, 3).baz;
let qux = foo(1, 2, 3).qux;
let bar = foo(1, 2, 3).bar;