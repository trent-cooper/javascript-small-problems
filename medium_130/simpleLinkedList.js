class SimpleLinkedList {
  constructor() {
    this.list = [];
  }

  size() {
    // return list size
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  head() {
    let topItem = this.list[this.list.length - 1]
    return topItem ? topItem : null;
  }

  peek() {
    // return value of top item
    return this.head() ? this.head().datum() : null; 
  }

  push(datum) {
    // create new element and push to list
    let item = new Element(datum, this.head());
    this.list.push(item);
  }

  pop() {
    // pop 1 item and return
    return this.list.pop().datum();
  }

  toArray() {
    // return list as array
    return this.list.map(item => item.datum()).reverse();
  }

  reverse() {
    let reverseList = new SimpleLinkedList();
    let pushList = this.list.slice().reverse();

    pushList.forEach(item => reverseList.push(item.datum()));

    return reverseList;
  }

  static fromArray(arr) {
    // iterate over array and push each item to list
    let newList = new SimpleLinkedList();

    if (arr) {
      arr.slice().reverse().forEach(item => newList.push(item));
    }

    return newList;
  }
}

class Element {
  constructor(data, next = null) {
    this.data = data;
    this.nextElement = next;
  }

  datum() {
    return this.data;
  }

  isTail() {
    // return if this is most recent item in list
    return this.next() === null;
  }

  next() {
    return this.nextElement;
  }
}

module.exports = { SimpleLinkedList, Element };