/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     let oNums = {};
    
//     for (let i = 0; i < nums.length; i++) {
//         oNums[nums[i]] = oNums[nums[i]]+1 || 1;
//     }

//     console.log(oNums)
    
//     for (let k in oNums) {
//         console.log(oNums[k])
//         if (oNums[k] === 1) {
//             return k;
//         }
//     }
// };

var singleNumber = function(nums) {
    var result = nums[0];
    for(var i = 1; i < nums.length; i++) {
        result = result^nums[i];
    }
    return result;
};

let nums = [1, 2,2,1, 4];

singleNumber(nums);

console.log(1 ^ 15)