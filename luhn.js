const check = function(number) {
  //from end, every second number, double it
  let newNumber = number.slice(0, number.length - 1);
  numLength = newNumber.length;
  //newNumber = Number(newNumber);
  let result = 0;
  let newNum = 0;
  console.log(newNumber[0]);
  for (let i = numLength - 1; i >= 0; i -= 2) {
    if (Number(newNumber[i]) * 2 > 9) {
      console.log("hello")
      result = Number(newNumber[i]) * 2;
      result = result.toString();
      console.log(typeof result);
      console.log(result);
      newNum += Number(result[0]) + Number(result[1]);
    }
    else {
      console.log("hello else")
      newNum += Number(newNumber[i]) * 2;
    }
  }
  console.log(newNum);
  number[number.length - 1]
  if (newNum % 10 === 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(check("7992739871x"));