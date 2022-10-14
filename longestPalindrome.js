//input string uppercase and lowercase find the longest palindrome and return length (number). case sensitive - no other chars
//


/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(str) {
    //create object. loop str store char as key and increment val for each char
    //check how many chars have even number, store that in var
    //if str.length > chars that have even num then +1 to var and return

    let chars = {};
    let letterCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (chars[str[i]]) {
            chars[str[i]] = chars[str[i]] + 1
        } else {
            chars[str[i]] = 1;
        }
    }
    for (let key in chars) {
        if (chars[key] > 1) {
            if (chars[key] % 2 ===0) {
                letterCount += chars[key];
            } else {
                letterCount += Math.floor(chars[key] / 2) * 2;
            }
        }
    } 
    if (letterCount === str.length) {
        return letterCount;
    } 
    return letterCount + 1;
}

console.log(longestPalindrome('AaA')); // -> 3
console.log(longestPalindrome('reacecara')) // -> 9
console.log(longestPalindrome('aanneerrlldfegt')) // -> 11