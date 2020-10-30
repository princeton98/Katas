const checkPermutation = function(strA, strB) {
    // permutation is the rearrangment of the string
    // check to see if both are the same length
    // if not, return false
    if (strA.length !== strB.length) {
        return false
    } else {
        let permA = strA.split("").sort().join("");
        let permB = strB.split("").sort().join("");
        return permA === permB
        
    }
}

console.log(checkPermutation("aabcd", "cabad"));