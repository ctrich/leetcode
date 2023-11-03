//Create a class that accepts an array of integers in its constructor
//when two instances of the class are added together with the + operator the result should be a sum of both arrays.
//when the string function is called on the instance, it will return a comma separated string surrounded with brackets.


class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
}


ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc, current) => {
        acc + current;
    }, 0);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums}]`;
}