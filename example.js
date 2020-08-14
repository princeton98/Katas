var lengthOfLongestSubstring = function(s) {
    let bigNum = 0;
    let arr = [];
    s = String(s);
    for (let i = 0; i < s.length; i++) {
        if (bigNum < arr.length) {
            bigNum = arr.length;
        }
        arr = [];
        //console.log(arr);
        arr.push(s[i]);
        for (let j = i+1; j < s.length; j++) {
        if (!arr.includes(s[j])) {
            arr.push(s[j]);
           // console.log(arr);
        }
        else {
           // console.log(arr);
            // if (bigNum < arr.length) {
            //     bigNum = arr.length;
            // }
            //console.log(bigNum);
            break;
        }
    }
}
   // console.log(arr.length);
    //console.log(bigNum);
     if (bigNum < arr.length) {
                bigNum = arr.length;
            }
    return bigNum;
};

console.log(lengthOfLongestSubstring("au"));