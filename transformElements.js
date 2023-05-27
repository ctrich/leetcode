/**
 * Given a integer array and a mapping function, return a new array with a transformation applied to each element.
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
    return newArr;
};