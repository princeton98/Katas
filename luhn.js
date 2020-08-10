const check = function(number) {
  //from end, every second number, double it
  let result = 0;
  let newNum = 0;
  for (let i = number.length; i > 0; i-2) {
    if (number[i] * 2 > 9) {
      result = number[i] * 2;
      newNum += result[0] + result[1] 
    }
    else {
      newNum += number[i] * 2;
    }
  }
  if (newNum % 10 === 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(check(7992739871));