const URLify = function (string, length) {
    // iterate over string
    // use length the stop the iteration
    // on every white space, change the space to %20, and reset the loop

    let sentence = string.split("")
    for (let i = 0; i < length; i++) {
        if (sentence[i] === " ") {
            sentence[i] = "%20";
        }
    }
    return sentence.join("");
    
}

console.log(URLify("Mr John Smith    ", 13));