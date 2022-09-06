function acronym(string) {
  let strArr = string.split(' ');
  strArr = strArr.map(word => word.split('-'));

  return strArr.flat()
               .map(word => word[0].toUpperCase())
               .join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"