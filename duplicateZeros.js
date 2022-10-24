//duplicate every zero in the array and shift all numbers to make room for the new zero. return an array thats the same length as the original
var duplicateZeros = function(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            for (let j = arr.length; j > i; j--) {
                arr[j] = arr[j - 1]
            }
            arr[i + 1] = 0;
            arr.pop()
            i++
        }
    }
};