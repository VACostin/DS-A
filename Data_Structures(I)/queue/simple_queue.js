/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
class Queue {
  constructor(maxLength) {
    this.queue = [];
    this.maxLength = maxLength;
    this.front = -1;
  }

  enqueue(item) {
    if (this.isFull()) console.log("queue is full mate");
    else this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return "nothing to dequeue mate";
    this.front += 1;
    if (this.front === this.queue.length - 1) {
      const value = this.queue[this.front];
      this.queue = [];
      this.front = -1;
      return value;
    }
    return this.queue[this.front];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  isFull() {
    return this.queue.length >= this.maxLength;
  }

  peek() {
    if (this.isEmpty()) return "nothing to see mate";
    return this.queue[this.front];
  }
}
