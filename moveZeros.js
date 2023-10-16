moveZeros = nums => {
    let loops = nums.length;
    for (let i = 0; i < loops; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            loops--;
            i--
        }
    }
}


let arr = [0,1,0,3,12];

moveZeros(arr);