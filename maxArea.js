const maxArea = function(height) {
    // height is an array
    // first, find the two lines that formulate the container
    let area = 0;
    let finalArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = height.length - 1; j > i; j--) {
            if (height[i] < height[j]) {
                area = height[i] * (j - i);
                if (area > finalArea) {
                    finalArea = area;
                }
            }
            else {
                area = height[j] * (j - i);
                if (area > finalArea) {
                    finalArea = area;
                }
            }
        }
    }
    return finalArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))