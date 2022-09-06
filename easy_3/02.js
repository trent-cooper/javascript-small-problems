function logInBox(string, maxWidth) {
  if (string.length > maxWidth - 4) {
    string = string.slice(0, maxWidth - 4);
  }

  console.log(`+${'-'.repeat(string.length + 2)}+`);
  console.log(`|${' '.repeat(string.length + 2)}|`);
  console.log(`| ${string} |`);
  console.log(`|${' '.repeat(string.length + 2)}|`);
  console.log(`+${'-'.repeat(string.length + 2)}+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');