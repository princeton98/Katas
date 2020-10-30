const isUnique = function(string) {
    // iterate over string
    // push character into array
    // if array includes character, return false
    let uniqueArr = [];
    for (let i = 0; i < string.length; i++) {
        if (uniqueArr.includes(string[i])) {
            return false;
        } else {
            uniqueArr.push(string[i]);
        }
    }
    return true;
}

console.log(isUnique("brian"));