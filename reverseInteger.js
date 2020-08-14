const reverse = function(x) {
    let newX = x.toString();
    let shiftX 
    console.log(newX);
    if (newX[0] === "-") {
        shiftX = newX.split("");
        shiftX.shift();
        shiftX = shiftX.reverse();
        shiftX.unshift("-");
        shiftX = shiftX.join("");
        shiftX = Number(shiftX);
    }
    else {
        shiftX = Number(newX.split("").reverse().join(""));
    }
    if (shiftX >= Math.pow(2, 31) - 1 || shiftX <= Math.pow(-2, 31)) {
        return 0;
     }
     return shiftX;
}

console.log(reverse(-321));