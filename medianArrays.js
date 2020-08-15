const findMedianSortedArrays = function(nums1, nums2) {
    //both sorted
    //put both arrays into one array
    let finalArr = [];
    let median = 0;
    for (let number of nums1) {
        finalArr.push(number);
    }
    for (let number of nums2) {
        finalArr.push(number);
    }
    //sort new array
    for (let i = 0; i < finalArr.length; i++) {
        if (finalArr[i] > finalArr[i+1]) {
            let a = finalArr[i];
            finalArr[i] = finalArr[i+1];
            finalArr[i+1] = a;
        }
    }
    if (finalArr.length % 2 === 0) {
       median = (finalArr[(finalArr.length / 2) - 1] + finalArr[(finalArr.length / 2)])/2;
    }
    else {
        median = finalArr[Math.round(finalArr.length / 2) - 1];
    }
    console.log(finalArr);
    return median;
};

console.log(findMedianSortedArrays([1,2], [3, 4]));