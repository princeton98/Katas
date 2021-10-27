const climbStairs = function(n) {
    // first, do the most with one step
    // second, do the most with two steps
    // i refers to the step index
    // j is the final number
    // 
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    while (i < n) {
        if (i + 1 <= n) {

        }
        if (i + 2 <= n) {

        }
        i ++;
    }
    return j;
}

console.log(climbStairs(3));

console.log(3, 4)


// 3, 1 step, can be either 1 or 2;
// step 2, can be either 1 or 2,
// step 3, can only be 1,