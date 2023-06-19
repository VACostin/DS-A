/**
 * @param {Array} array Array to traverse 
 * @param {number} target Value to look for 
 * @param {Function} [callback] Optional: Expression to evaluate every element against target
 * @returns {boolean} Self explanatory what it returns.
 * ```js
 * const array = [0, 1, 2, 3, 4];
 * binarySearch(array, 2);
 * //returns true;
 * binarySearch(array, 5);
 * //returns false;
 * const expression = (value) => Math.sqrt(value);
 * binarySearch(array, 2, expression);
 * //returns true;
 * ```
 */
// eslint-disable-next-line no-unused-vars
function binarySearch (array, target, callback = (value) => value){
    if(array.length <= 0)
        return false;
    const n = Math.floor(array.length / 2);
    const middle = callback(array[n]);
    if (middle === target)
        return true;
    if (middle > target)
        return binarySearch(array.slice(0, n - 1), target, callback);
    return binarySearch(array.slice(n + 1, array.length), target, callback);
}