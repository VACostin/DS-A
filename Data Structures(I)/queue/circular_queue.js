// eslint-disable-next-line no-unused-vars
class CircularQueue {
    constructor(maxLength) {
        this.queue = [];
        this.maxLength = maxLength;
    }

    enqueue(item) {
        if(this.isFull()) console.log("queue is full, mate");
        else this.queue.push(item);
    } 

    dequeue() {
        if(this.isEmpty()) return "nothing to dequeue, mate";
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length <= 0;
    }

    isFull() {
        return this.queue.length >= this.maxLength;
    }

    peek() {
        if(this.isEmpty()) return "nothing to see mate";
        return this.queue[0];
    }
}