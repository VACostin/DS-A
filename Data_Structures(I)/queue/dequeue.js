/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class Dequeue {
  constructor(maxLength, restriction, closedEnd) {
    this.maxLength = maxLength;
    if (restriction.includes("input")) {
      if (closedEnd.includes("front")) this.queueFront = this.#invalidOperation;
      else this.queueRear = this.#invalidOperation;
    } else if (closedEnd.includes("front"))
      this.dequeueFront = this.#invalidOperation;
    else this.dequeueRear = this.#invalidOperation;
    this.array = [];
  }

  #invalidOperation() {
    console.log("not gonna happen mate");
  }

  queueFront(item) {
    if (this.array.length >= this.maxLength) console.log("queue is full mate");
    else this.array.unshift(item);
  }

  queueRear(item) {
    if (this.array.length >= this.maxLength) console.log("queue is full mate");
    else this.array.push(item);
  }

  dequeueFront() {
    if (this.array.length <= 0) console.log("queue is empty mate");
    else this.array.shift();
  }

  dequeueRear() {
    if (this.array.length <= 0) console.log("queue is empty mate");
    this.array.pop();
  }
}
