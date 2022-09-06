class BeerSong {
  static verse(num) {
    return this.returnVerse(num);
  }

  static verses(...num) {
    let [ start, finish ] = num;
    let song = '';

    for (let num = (start); num > finish; num--) {
      song += this.returnVerse(num) + '\n';
    }

    song += `${this.returnVerse(finish)}`;

    return song;
  }

  static lyrics() {
    return this.verses(99, 0);
  }

  static returnVerse(num) {
    if (num === 2) {
      return `2 bottles of beer on the wall, 2 bottles of beer.\n` +
            `Take one down and pass it around, 1 bottle of beer ` +
            'on the wall.\n';
    }

    if (num === 1) {
      return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
      `Take it down and pass it around, no more bottles of beer ` +
      'on the wall.\n';
    }

    if (num === 0) {
      return `No more bottles of beer on the wall, no more bottles of beer.\n` +
      `Go to the store and buy some more, 99 bottles of beer ` +
      'on the wall.\n';
    }

    return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
            `Take one down and pass it around, ${num - 1} bottles of beer ` +
            'on the wall.\n';
  }
}

console.log(BeerSong.lyrics());

module.exports = BeerSong;