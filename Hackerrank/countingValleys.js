const countingValleys = function(steps, path) {
    // make altitude counter, starting at 0 (sea level)
    // if U, add 1 
    // if D, subtract 1
    let altitude = 0;
    let valleys = 0
    for (let i = 0; i < steps; i++) {
        if (path[i] === "U") {
            altitude++;
        } else if (path[i] === "D") {
            altitude --;
        }
        if (altitude === 0 && path[i] === "U")  {
            valleys ++;
        }
        //console.log(altitude);
    }
    return valleys;
}

console.log(countingValleys(12, ["D","D","U","U","D","D","U","D","U","U","U","D"]));