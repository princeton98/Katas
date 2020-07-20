const calculateChange = function(total, cash) {
  // 
  let finalChange = {}
  const change = cash - total;
  let twenty = Math.floor(change / 2000);
    if (twenty !== 0) {
      finalChange.twentyDollar = twenty
    }
  let newChange = change % 2000;
  let ten = Math.floor(newChange / 1000);
  if (ten !== 0) {
    finalChange.tenDollar = ten;
  }
  newChange %= 1000
  let five = Math.floor(newChange / 500);
  if (five !== 0) {
    finalChange.fiveDollar = five;
  }
  newChange %= 500
  let two = Math.floor(newChange / 200);
  if (two !== 0) {
    finalChange.twoDollar = two;
  }
  newChange %= 200;
  let one = Math.floor(newChange / 100);
  if (one !== 0) {
    finalChange.oneDollar = one;
  }
  newChange %= 100
  let quarter = Math.floor(newChange / 25);
  if (quarter !== 0) {
    finalChange.quarter = quarter;
  }
  newChange %= 25
  let dime = Math.floor(newChange / 10);
  if (dime !== 0) {
    finalChange.dime = dime;
  }
  newChange %= 10
  let nickel = Math.floor(newChange / 5);
  if (nickel !== 0) {
    finalChange.nickel = nickel;
  }
  newChange %= 5
  let penny = Math.floor(newChange / 1);
  if (penny !== 0) {
    finalChange.penny = penny;
  }
  return finalChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));