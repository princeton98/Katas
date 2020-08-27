const longestPalindrome = function(s) {
    // find the palindrome of the string
    let finalPalindrome = ""
    // then compare original string with palindrome string
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j > i ; j--) {
            if (s[i] === s[j]) {
                let longPalindrome = "";
                for (let k = j; k >= i; k--) {
                    longPalindrome += s[k];
                    //console.log(longPalindrome);
                }
                if (s.includes(longPalindrome) && (longPalindrome.length > finalPalindrome.length)) {
                    finalPalindrome = longPalindrome;
                    if (i === 0 && j === s.length - 1) {
                        return finalPalindrome;
                    }
                    return finalPalindrome;
                }
            }
        }
    }
    return finalPalindrome;
}

console.log(longestPalindrome("cbbd"));