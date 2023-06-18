/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
function bubbleSort(array) {
  if (array.length <= 1) return array;
  for (
    let step = 1, swapped = true;
    step < array.length && swapped;
    step += 1
  ) {
    swapped = false;
    for (let i = 0; i < array.length - step; i += 1) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  }
}

const myArray = [1, 2, 0, 3];
bubbleSort(myArray);
console.log(myArray);