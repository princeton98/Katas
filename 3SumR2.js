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
                        if (finalArr.includes(nums[i]) && finalArr.includes(nums[j]) && finalArr.includes(nums[k])) {
                           console.log("hello");
                           finalConfirm = false;
                           }
                       
                if (finalConfirm) {
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

console.log(threeSum([0,-5,3,-4,1,3,-4,-2,-2,-2,0,3,0,1,-4,-2,0]));