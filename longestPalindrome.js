const longestPalindrome = function(s) {
    // find the palindrome of the string
    let palindrome = "";
    for (let i = s.length - 1; i >= 0; i--) {
        palindrome += s[i];
    }
    console.log(palindrome);
    // then compare original string with palindrome string
}

longestPalindrome("babad");