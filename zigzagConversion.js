const convert = function(s, numRows) {
    // first column, add letter to different rows
    // then, add letter to one before last, and continue on until it reaches the first row
    // repeat
    // numRows determines the variables
    let rows = [];
    let repeatSpot = numRows;
    for (let l = numRows - 2; l > 0; l--) {
        repeatSpot++;
    }
    console.log(repeatSpot);
    for (let i = 0; i < numRows; i++) {
        rows.push([s[i]]);;
        console.log(rows);
    }
    for (let k = 0; k < s.length; k += repeatSpot) {
        let j = 0;
        if (k !== 0) {
            for (let i = 0; i < numRows; i ++) {
                rows[i].push(s[k + i]);
            }
        }
        while ((numRows - 2) - j !== 0) {
            rows[(numRows - 2) - j].push(s[numRows + k - j]);
            j++;
        }
    }
    
    return rows;
}

console.log(convert("PAYPALISHIRING", 3));