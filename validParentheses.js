/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            arr.push(s[i])
        } else {
            let opening = arr.pop();
            if ((s[i] === '}'&& opening !== '{') || (s[i] === ']' && opening !== '[') || (s[i] === ')' && opening !== '(')) {
                return false;
            }
        }
    }
    if (arr.length > 0) return false;
    return true;
};