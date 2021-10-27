const romanToInt = function(s) {
    let arr = s.split("");
    let num = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "I") {
            if (arr[i+1] === "V" || arr[i+1] === "X") {
                num--;
            } else {
                num++;
            }
        }
        if (arr[i] === "V") {
            num += 5;
        }
        if (arr[i] === "X") {
            if (arr[i+1] === "L" || arr[i+1] === "C") {
                num -= 10;
            } else {
                num += 10;
            }
        }
        if (arr[i] === "L") {
            num += 50;
        }
        if (arr[i] === "C") {
            if (arr[i+1] === "D" || arr[i+1] === "M") {
                num -= 100;
            } else {
                num += 100;
            }
        }
        if (arr[i] === "D") {
            num += 500;
        }
        if (arr[i] === "M") {
            num += 1000;
        }
    }
    return num;
};

console.log(romanToInt("MCMXCIV"))