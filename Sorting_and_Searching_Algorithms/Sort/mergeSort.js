// eslint-disable-next-line no-unused-vars
function mergeSort(arr) {
  const n = arr.length;
  if (n <= 1) return arr;

  const left = mergeSort(arr.slice(0, n / 2));

  const right = mergeSort(arr.slice(n / 2, n));

  let newArr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) newArr.push(left.shift());
    else newArr.push(right.shift());
  }
  if (left.length > 0) newArr = [...newArr, ...left];
  else newArr = [...newArr, ...right];

  return newArr;
}
