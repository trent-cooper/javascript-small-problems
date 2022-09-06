// input: string
// output: string

// algo: 
//  input template with words-to-be-replaced simply listed as adjetive, noun, verb or adverb
//  call .replaceAll() on string for each word category, pass a random word function as argument so that each time
//    the replace method is called, a new value is returned.
//  return new string

function madlibs(template) {
  let adjective = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  let noun = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  let verb = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  let adverb = ['easily', 'lazily', 'noisily', 'exitedly'];

  template = template.split(' ').map(word => {
    if (word === 'adj') {
      return randomWord(adjective);
    } else if (word === 'noun') {
      return randomWord(noun);
    } else if (word === 'verb') {
      return randomWord(verb);
    } else if (word === 'adv') {
      return randomWord(adverb);
    }
    return word;
  }).join(' ');

  return template;
}

function randomWord(wordType) {
  let randomNum = Math.floor(Math.random() * wordType.length);
  return wordType[randomNum];
}

let template1 = 'The adj brown noun adv verb the adj yellow noun, who adv verb his noun and looks around.'

console.log(madlibs(template1));