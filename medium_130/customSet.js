

class CustomSet {
  constructor(elements = []) {
    this.list = [...elements];
  }

  isEmpty() {
    // return boolean if empty/not
    return this.list.length === 0;
  }

  contains(ele) {
    // return if set contains element passed as argument
    return this.list.includes(ele);
  }

  isSubset(otherSet) {
    // compare calling set to other set - return boolean value of if CALLING set elements
    //    are included in super-set
    return this.list.every(ele => otherSet.contains(ele));
  }

  isDisjoint(otherSet) {
    // compare calling set to other set - return boolean value of sets sharing NO values
    return this.list.every(ele => !otherSet.contains(ele));

  }

  isSame(otherSet) {
    // return boolean value of sets sharing ALL values
    // **might need to sort each set before comparison
    let list1 = this.list.slice().sort((a, b) => a - b);
    let list2 = otherSet.list.slice().sort((a, b) => a - b);

    return list1.length === list2.length && list1.every((ele, idx) => ele === list2[idx]);
  }

  add(value) {
    // add element to calling set (push to array)
    if (!this.contains(value)) {
      this.list.push(value);
    }
    return this;
  }

  intersection(otherSet) {
    // return NEW set containing all shared elements
    let newList = new CustomSet();

    this.list.forEach(ele => {
      if (otherSet.contains(ele)) {
        newList.add(ele);
      }
    });

    return newList;
  }

  difference(otherSet) {
    // return NEW set containing elements of CALLING set that ARE NOT shared with otherset
    let newList = new CustomSet();

    this.list.forEach(ele => {
      if (!otherSet.contains(ele)) {
        newList.add(ele);
      }
    });

    return newList;
  }

  union(otherSet) {
    // return NEW set containing all elements of both sets, removing duplicates
    //    sort return list.
    let newList = new CustomSet();

    [...this.list, ...otherSet.list].sort((a, b) => a - b)
                                    .forEach(ele => {
                                      newList.add(ele);
                                    });

    return newList;
  }

}

const actual = new CustomSet([1, 3]).union(new CustomSet([2, 3]));
console.log(actual.list);

module.exports = CustomSet;