//returns the longest common prefix or "" if no common prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] !== strs[i][j]) {
                console.log(j)
                prefix = prefix.slice(0, j);
                break;
            }
        }
        if (prefix.length === 0) {
            return '';
        } 
    }
    return prefix;
};