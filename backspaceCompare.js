/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let arr1 = [];
    let arr2 = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            arr1.pop();
        } else {
            arr1.push(s[i]);
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            arr2.pop();
        } else {
            arr2.push(t[i]);
        }
    }
    
    return arr1.join('') === arr2.join('');
};