const hourglassSum = function (arr) {
    // 3 from first row, one from second row, three from third row
    // loops through first row
    let sum = 0;
    let arrSum = [];
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[j][i+1] !== undefined && arr[j][i+2] !== undefined && arr[j+1] !== undefined && arr[j+2] !== undefined) {
                sum += arr[j][i] + arr[j][i+1] + arr[j][i+2];
                sum += arr[j+1][i+1];
                sum += arr[j+2][i] + arr[j+2][i+1] + arr[j+2][i+2];
                arrSum.push(sum);
                sum = 0;
            }
        }
    }
    return Math.max(...arrSum);
}

console.log(hourglassSum([[-9,-9,-9,1,1,1], [0,-9,0,4,3,2], [-9,-9,-9,1,2,3], [0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0]]));