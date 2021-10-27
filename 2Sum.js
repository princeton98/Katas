var twoSum = function(nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {}
           else if (nums[i] + nums[j] === target) {
                arr.push(i, j)
                return arr
            }
        }
    }
};