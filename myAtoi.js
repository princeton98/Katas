const myAtoi = function(str) {
    // takes a string, looks for first non-whitespace character, if integer or minus/plus sign, convert, otherwise, return 0
    let finalStr = "";
    for (let i = 0; i < str.length; i++) {
            if (str[i] === "-" || Number(str[i])) {
                finalStr += str[i];
                for (let j = i+1; j < str.length; j++) {
                    if (Number(str[j])) {
                        finalStr += str[j];
                    }
                }
                if (Number(finalStr) <= Math.pow(-2, 31)) {
                    return Math.pow(-2, 31);
                } else if (Number(finalStr) >= (Math.pow(2, 31) - 1)) {
                    return Math.pow(2, 31);
                }
                else {
                    return Number(finalStr);
                }
            }
            else if (String(str[i]) && str[i] !== " ") {
                return 0;
            }
    }
    return 0;
}

console.log(myAtoi("-91283472332"));