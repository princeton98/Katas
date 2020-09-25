const isMatch = function(s, p) {
    //match two expressions
    //*, look at previous letter, look at s expression, and add or remove depending on if necessary
    //., look at s expression, and match the letter
    let tempWord = "";
    for (let i = 0; i < p.length; i++) {
        if (p[i] === "*") {
            if (p[i-1] === ".") {
                tempWord += s[i]
            } else {
                tempWord += p[i-1];    
            }
        } else if (p[i] === ".") {
            tempWord += s[i];
        } 
        else {
            tempWord += p[i];
        }
    }
    console.log(tempWord);
}

isMatch("ab", ".*");