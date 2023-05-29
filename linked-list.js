/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  // bee is current 
    // if current !== null, make current current.next;
  // vals = ["bee", "ant", "caterpillar", "mosquito"]

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    this.length += 1;

    if (this.head === null) this.head = newNode;
    
    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (this.length === 0) this.tail = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let response = this.tail;
    let current = this.head;
    if (current === null) {
      throw new Error('This list is empty!')
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    while (current.next !== null) {
      if (current.next !== this.tail) {
        current = current.next;
      }
      break;
    }
    this.tail = current;
    this.tail.next = null;
    this.length -= 1;
    return response.val;
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

// let newlist = new LinkedList([new Node('ant')])
// console.log(newlist.pop())

module.exports = LinkedList;
