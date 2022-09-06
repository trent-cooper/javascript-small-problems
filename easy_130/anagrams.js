class Anagram {
  constructor(string) {
    this.detector = string;
  }

  match(arr) {
    let detector = this.detector.toLowerCase().split('').sort().join('');
    return arr.filter(word => {
      if (this.detector.toLowerCase() === word.toLowerCase()) return false;

      let match = word.toLowerCase().split('').sort().join('');
      return detector === match;
    });
  }
}

module.exports = Anagram;