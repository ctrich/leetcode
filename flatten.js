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

let arr = [1, 2, 3, [4, 2, 5, [35, 6, 7]], {obj: 1}]
console.log(arr.flatten());

function flatten(arr, res = []) {
    let result = res;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
