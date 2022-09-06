let localGreet = (code) => {
  let region = code.split('.')[0]
                   .split('_')[1]
                   .toLowerCase();
  let language = code.split('.')[0]
                     .split('_')[0];
  if (language === 'en'){
    switch (region) {
      case 'us':
        return 'Hi!';
      case 'pt':
        return 'Ola!';
      case 'de':
        return 'Hallo!';
      case 'sv':
        return 'Hej!';
      case 'af':
        return 'Haai!';
      case 'gb':
        return 'Hello';
      case 'au':
        return 'Howdy';
    }
  } else if (language === 'fr') {
    switch (region) {
      case 'fr':
        return 'Bonjour!';
      default:
        return 'Salut!';
    }
  }
}

console.log(localGreet('en_US.UTF-8')); 
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));