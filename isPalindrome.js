//Given an integer x, return true if x is palindrome integer.

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  return x.toString() === x.toString().split('').reverse().join('');  
};