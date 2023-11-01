Array.prototype.flatten = function(arr = []) {

    let result = arr
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            this[i].flatten(result)
        } else {
            result.push(this[i])
        }
    }
    return result;
}

let arr = [[1, 'chris'], [3], [3, 4, 5, [1, 'dad', 3]], {obj: 'num1'}]
console.log(arr.flatten());