// eslint-disable-next-line no-unused-vars
class Stack {
  constructor(maxLength) {
    this.stack = [];
    this.maxLength = maxLength;
  }

  push(item) {
    if (this.isFull()) console.log("stack is full, mate");
    else this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) return "nothing to pop";
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length <= 0;
  }

  isFull() {
    return this.stack.length >= 3;
  }

  peek() {
    if (this.isEmpty()) return "nothing to see mate";
    return this.stack[this.stack.length - 1];
  }
}
