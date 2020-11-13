const repeatedString = function (s,n) {
    let sentence = s.split("")
    let repeatedTimes = Math.floor(n / sentence.length);
    let numOfA = 0;
    let total = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === "a") {
            numOfA += 1;
        } 
    }
    total = repeatedTimes * numOfA;
    if (n - (repeatedTimes * sentence.length)!== 0) {
        for (let j = 0; j < n-(repeatedTimes * sentence.length); j++) {
            if (sentence[j] === "a") {
                total += 1;
            }
        }
    }
    return total;
}

console.log(repeatedString("abcac", 10));