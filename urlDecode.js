const urlDecode = function(text) {
 let finalObj = {}
 for (let i = 0; i < text.length; i++) {
 if (text.includes("%20")) {
   text = text.replace("%20", " ");
 }
}
 let textArr = text.split('=').join(',').split('&').join(',').split(',')

  for (let i = 0; i < textArr.length; i++) {
    if (i % 2 === 0) {
      finalObj[textArr[i]] = textArr[i+1];
    }
  }
 return finalObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);