const intToRoman = function(num) {

    let tempNum = num;
    let finalRoman = ""
    while (tempNum > 0) {
        if (tempNum >= 1000) {
            finalRoman += "M";
            tempNum -= 1000;
        }
        if (tempNum >= 900 && tempNum < 1000) {
            finalRoman += "CM";
            tempNum -= 900;
        }
        if (tempNum >= 500 && tempNum < 900) {
            finalRoman += "D";
            tempNum -= 500;
        }
        if (tempNum >= 400 && tempNum < 500) {
            finalRoman += "CD";
            tempNum -= 400;
        }
        if (tempNum >= 100 && tempNum < 400) {
            finalRoman += "C";
            tempNum -= 100;
        }
        if (tempNum >= 90 && tempNum < 100) {
            finalRoman += "XC"
            tempNum -= 90;
        }
        if (tempNum >= 50 && tempNum < 90) {
            finalRoman += "L";
            tempNum -= 50;
        }
        if (tempNum >= 40 && tempNum < 50) {
            finalRoman += "XL";
            tempNum -= 40;
        }
        if (tempNum >= 10 && tempNum < 40) {
            finalRoman += "X";
            tempNum -= 10;
        }
        if (tempNum === 9) {
            finalRoman += "IX";
            tempNum -= 9;
        }
        if (tempNum >= 5 && tempNum < 9) {
            finalRoman += "V";
            tempNum -= 5;
        }
        if (tempNum === 4) {
            finalRoman += "IV";
            tempNum -= 4;
         }
        if (tempNum > 0 && tempNum < 4) {
            finalRoman += "I";
            tempNum -= 1;
        }
    }
        return finalRoman;
}

console.log(intToRoman(1994));