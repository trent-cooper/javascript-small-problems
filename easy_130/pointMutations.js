class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(strand2) {
    let strand1 = this.strand;
    let diffCount = 0;
    let length;
    strand1.length < strand2.length ? (length = strand1.length) : (length = strand2.length);

    for (let idx = 0; idx < length; idx++) {
      if (strand1[idx] !== strand2[idx]) {
        diffCount++;
      }
    }

    return diffCount;
  }
}

module.exports = DNA;
