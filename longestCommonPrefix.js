const longestCommonPrefix = function(strs) {
    let finalOutput = "";
    let prefixTrue = true;
    if (!strs[0]) {
        return finalOutput;
    }
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] === strs[j][i]) {
                prefixTrue = true;
            }
            else {
                prefixTrue = false;
                return finalOutput;
            }
        }
        if (prefixTrue) {
            finalOutput += strs[0][i];
        }
    }
    return finalOutput;
}

console.log(longestCommonPrefix(["dog","racecar","car"]))