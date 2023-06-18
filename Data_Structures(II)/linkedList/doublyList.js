/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class DoublyListNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyList {
  constructor(head = null) {
    this.head = head;
  }

  traverse() {
    for (let node = this.head; node !== null; node = node.next)
      console.log(node);
  }

  insertFirst(node) {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  insertBefore(index, node) {
    if (index >= this.size()) this.insertLast(node);
    else {
      let prevNode = this.head;
      for (let i = 2; i < index; i += 1) prevNode = prevNode.next;
      node.next = prevNode.next;
      prevNode.next = node;
      node.prev = prevNode;
      node.next.prev = node;
    }
  }

  insertLast(node) {
    const tail = this.getLast();
    if (tail === null) this.head = node;
    else {
      tail.next = node;
      node.prev = tail;
    }
  }

  deleteFirst() {
    if (!this.isEmpty()) {
      this.head = this.head.next;
      if (!this.isEmpty()) this.head.prev = null;
    }
  }

  deleteAt(index) {
    if (index >= this.size()) this.deleteLast();
    else if (index === 0) this.deleteFirst();
    else {
      let node = this.head;
      for (let i = 1; i < index; i += 1) node = node.next;
      node.next = node.next.next;
      node.next.prev = node;
    }
  }

  deleteLast() {
    const size = this.size();
    if (size <= 1) this.head = null;
    else {
      let node = this.head;
      for (let i = 2; i < size; i += 1) node = node.next;
      node.next = null;
    }
  }

  size() {
    if (this.head === 0) return 0;
    let size = 1;
    for (let node = this.head; node.next !== null; size += 1) node = node.next;
    return size;
  }

  getFirst() {
    return this.head;
  }

  getAt(index) {
    if (index >= this.size()) return null;
    let node = this.head;
    for (let i = 0; i < index; i += 1) node = node.next;
    return node;
  }

  getLast() {
    if (this.head === null) return null;
    let node = this.head;
    while (node.next !== null) node = node.next;
    return node;
  }

  sort() {
    const size = this.size();
    for (let step = 1, swapped = true; step < size && swapped; step += 1) {
      let node = this.head;
      swapped = false;
      for (let i = 1; i <= size - step; i += 1) {
        if (node.data > node.next.data) {
          swapped = true;
          const temp = node.data;
          node.data = node.next.data;
          node.next.data = temp;
        }
        node = node.next;
      }
    }
  }

  isEmpty() {
    return this.head === null;
  }
}

const list = new DoublyList();

for (let i = 3; i >= 0; i -= 1) {
  const node = new DoublyListNode(i);
  list.insertLast(node);
}
