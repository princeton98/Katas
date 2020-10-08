const threeSum = function(nums) {
    // three loops?
    let finalArr = []
    let finalConfirm = true;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    if (finalArr.length === 0) {
                        finalArr.push([nums[i], nums[j], nums[k]]);
                    } else {
                    for (let m = 0; m < finalArr.length; m++) {
                   // if (finalArr[m].includes(nums[i]) && finalArr[m].includes(nums[j]) && finalArr[m].includes(nums[k])) {
                    if ((finalArr[m].includes(nums[i]) && finalArr[m].includes(nums[j]) && finalArr[m].includes(nums[k])) && (nums[i] !== nums[j] || nums[i] !== nums[k])) {
                    console.log("hello");
                    finalConfirm = false;
                    }
                }
                if (finalConfirm && (nums[i] !== nums[j] || nums[i] !== nums[k])) {
                    console.log("hello final confirm");
                    finalArr.push([nums[i], nums[j], nums[k]]);
                }
                finalConfirm = true;
            }
                }
            }
        }
    }
    return finalArr;
}

console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]));