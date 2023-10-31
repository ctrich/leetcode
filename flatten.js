Array.prototype.flatten = function(arr = []) {
    console.log(arr)

    
    let result = arr
    for (let i = 0; i < this.length; i++) {
        //console.log("in the for loop", Array.from(this[i]), i)
        console.log(typeof this[i])
        if (typeof this[i] === "number") {
            //console.log('t')
            result.push(this[i])
        } else {
            this[i].flatten(result)
        }
    }
    return result;
}

//console.log([[1, 2], [3]].flatten());
let arr = [[1, 2], [3], [3, 4, 5, [1, 2, 3]]]
console.log(arr.flatten());