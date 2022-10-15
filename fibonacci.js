/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if (n < 2) return n;
    
    let a = 0;
    let b = 1;
    
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp; 
    }
    
    return b;
  };  