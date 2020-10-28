const letterCombinations = function(digits) {
    // go into digit string, get first number
    const two = "abc"
    const three = "def"
    const four = "ghi"
    const five = "jkl"
    const six = "mno"
    const seven = "pqrs"
    const eight = "tuv"
    const nine = "wxyz"
    let arr = [];
    let finalWord = "";
    let number = ""

    if (digits[0] === "2") {
        number = two
    }
    if (digits[0] === "3") {
        number = three
    }       
    if (digits[0] === "4") {
        number = four;
    }       
    if (digits[0] === "5") {
        number = five;
    }       
    if (digits[0] === "6") {
        number = six
    }       
    if (digits[0] === "7") {
        number = seven;
    }       
    if (digits[0] === "8") {
        number = eight;
    }       
    if (digits[0] === "9") {
        number += nine;
    }
    for (let k = 0; k < number.length; k++) {
            finalWord += number[k];
            if (digits.length === 1) {
                arr.push(finalWord);
                finalWord = ""
            }

    if (digits.length > 1) {
        for (let j = 0; j < number.length; j++) {
            for (let i = 1; i < digits.length; i++) {
                if (digits[i] === "2") {
                    finalWord += two[j];
                }
                if (digits[i] === "3") {
                    finalWord += three[j];
                }       
                if (digits[i] === "4") {
                    finalWord += four[j];
                }       
                if (digits[i] === "5") {
                    finalWord += five[j];
                }       
                if (digits[i] === "6") {
                    finalWord += six[j];
                }       
                if (digits[i] === "7") {
                    finalWord += seven[j];
                }       
                if (digits[i] === "8") {
                    finalWord += eight[j];
                }       
                if (digits[i] === "9") {
                    finalWord += nine[j];
                }       
            }
            if (finalWord) {
            arr.push(finalWord);
            finalWord = finalWord[0];
            }
        }
        finalWord = "";
        }

    }
    return arr;
}

console.log(letterCombinations("2"));