let password = process.argv.slice(2);
password = String(password);
//console.log(password);

const obfuscate = function(string) {
  let finalWord = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      finalWord += "4";
    }
    else if (string[i] === "e") {
      finalWord += "3";
    }
    else if (string[i] === "o") {
      finalWord += "0";
    }
    else if (string[i] === "l") {
      finalWord += "1";
    }
    else {
      finalWord += string[i];
    }
  }
  return finalWord;
}
console.log(obfuscate(password));