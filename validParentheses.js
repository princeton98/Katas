const isValid = function(s) {
    let arr = s.split("");
    let valid = false;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === "(" && arr[i+1] === ")") || (arr[i] === "(" && arr[arr.length - 1 - i] === ")")) {
            valid = true;
        }
          else if ((arr[i] === "{" && arr[i+1] === "}") || (arr[i] === "{" && arr[arr.length - 1 - i] === "}")) {
            valid = true;
        } else if  ((arr[i] === "[" && arr[i+1] === "]") || (arr[i] === "[" && arr[arr.length - 1 - i] === "]")) {
            valid = true;
        } else if (arr[i] === ")" || arr[i] === "}" || arr[i] === "]") {
        } else {
            return valid = false;
        }
    }
    return valid;
}

console.log(isValid("(}{)"));