let insertionSort = nums => {
    for (let i = 1; i < nums.length; i++) {
        let currentVal = nums[i];
        for (var j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
            nums[j+1] = nums[j];
        }
        nums[j+1] = currentVal;
    }
    console.log(nums)
}


insertionSort([2, 5, 3, 78, 6, 1]);


function insertionSort(inputArr) {
   
    for (let i = 1; i < inputArr.length; i++) {
        
        let current = inputArr[i];
        
        let j = i - 1;
        while (j > -1 && current < inputArr[j]) {
             inputArr[j + 1] = inputArr[j];
             j--;
         }
         inputArr[j + 1] = current;
      }
   return inputArr;
}