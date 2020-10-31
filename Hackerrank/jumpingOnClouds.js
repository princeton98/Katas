const jumpingOnClouds = function (position) {
    // if number is one, avoid
    let jumps = 0;
    for (let i = 0; i < position.length - 1; i++) {
        if (!position[i]) {
            jumps ++;
            if (!position[i+1] && !position[i+2]) {
                i++;
            }
        } 
    }
    return jumps;
}

console.log(jumpingOnClouds(6, [0, 0, 0, 0, 1, 0]));