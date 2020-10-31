function sockMerchant(n, ar) {
    let obj = {}
    let pairs = 0;
    for (let i = 0; i < n; i++) {
        if (obj[ar[i]]) {
            obj[ar[i]] += 1;
        } else {
            obj[ar[i]] = 1;
        }
    }
    for (let number in obj) {
           pairs += Math.floor(obj[number] / 2)
       }
    return pairs;
    }

console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));