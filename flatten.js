Array.prototype.flatten = function(arr = []) {

    let result = arr
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] === "number") {
            result.push(this[i])
        } else {
            this[i].flatten(result)
        }
    }
    return result;
}

let arr = [[1, 2], [3], [3, 4, 5, [1, 2, 3]]]
console.log(arr.flatten());