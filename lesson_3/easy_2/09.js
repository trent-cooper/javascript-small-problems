let title = "Flintstone Family Members";

let length = Math.floor((40 - title.length) / 2);

let final = title.padStart(length + title.length);

// let final = title.slice(0, length).padStart(20, '*') + title.slice (length).padEnd(20, '*');

console.log(final);