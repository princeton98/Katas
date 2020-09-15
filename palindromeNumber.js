const isPalindrome = function(x) {
    // x is an integer
    // change into string, start from back, input numbers backwards, compare to original
    const num = x.toString();
    let palindrome = ""
    console.log(num);
    for (let i = num.length - 1; i >= 0; i--) {
        palindrome += num[i]
    }
    if (palindrome === num) {
        return true
    } else {
        return false;
    }
}
console.log(isPalindrome(121));