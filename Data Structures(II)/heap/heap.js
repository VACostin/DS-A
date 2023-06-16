/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line no-unused-vars
class MaxHeap {
  constructor(array) {
    this.array = [...array];
    this.#buildArray();
  }

  #buildArray() {
    const n = this.array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i -= 1)
      this.#heapifyArray(this.array, n, i);
  }

  // eslint-disable-next-line class-methods-use-this
  #swap(a, b) {
    return [b, a];
  }

  #heapifyArray(array, n, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (array[left] > array[i] && left < n)
      [array[left], array[i]] = this.#swap(array[left], array[i]);
    if (array[right] > array[i] && right < n)
      [array[right], array[i]] = this.#swap(array[right], array[i]);

    i -= 1;
    if (i >= 0) array = this.#heapifyArray(array, n, i);
    return array;
  }

  insert(item) {
    this.array.push(item);
    this.#buildArray();
  }

  delete(item) {
    const deleteIndex = this.array.indexOf(item);
    const n = this.array.length;
    [this.array[deleteIndex], this.array[n - 1]] = this.#swap(
      this.array[deleteIndex],
      this.array[n - 1]
    );
    this.array.pop();
    this.#buildArray();
  }

  peek() {
    return this.array[0];
  }

  extract() {
    this.array.shift();
  }
}

const myArray = new MaxHeap([3, 9, 2, 1, 4, 5]);
myArray.insert(7);