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
                        if (finalArr[m][0] === 0 && finalArr[m][1] === 0 && finalArr[m][2] === 0 && nums[i] === 0 && nums[j] === 0 && nums[k] === 0) {
                            finalConfirm = false;
                        }  else if ((finalArr[m][0] !== 0 || finalArr[m][1] !== 0 || finalArr[m][2] !== 0) && nums[i] === 0 && nums[j] === 0 && nums[k] === 0) {
                            console.log(finalArr[m] === [0,0,0]);
                            console.log("its me");
                        }
                           else if (finalArr[m].includes(nums[i]) && finalArr[m].includes(nums[j]) && finalArr[m].includes(nums[k])) {
                           console.log("hello");
                           finalConfirm = false;
                           }
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