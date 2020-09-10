const convert = function(s, numRows) {
    let rows = [];
    let repeatSpot = numRows;
    let finalWord = "";
    for (let l = numRows - 2; l > 0; l--) {
        repeatSpot++;
    }
    for (let i = 0; i < numRows; i++) {
        rows.push([s[i]]);;
    }
    for (let k = 0; k < s.length; k += repeatSpot) {
        let j = 0;
        if (k !== 0) {
            for (let i = 0; i < numRows; i ++) {
                if (s[k + i]) {
                    rows[i].push(s[k + i]);
                }
            }
        }
        if (numRows >= 2) {
             while ((numRows - 2) - j !== 0 && s[numRows + k + j]) {
            rows[(numRows - 2) - j].push(s[numRows + k + j]);
            j++;
        }
        }
    }
    for (let i = 0; i < numRows; i++) {
        finalWord += rows[i].join("");
    }
    return finalWord;
}

console.log(convert("PAYPALISHIRING", 3));