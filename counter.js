/**
 * Given and integer n return a counter function. This counter function initially returns
 * n and then returns 1 more than the previous value every subsequent time its called.
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = -1;
    return function() {
        count++
        return n + count;
    };
};