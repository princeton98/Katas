const sentence = process.argv.slice(2);
let arr = [];
for (let i = 0; i < sentence.length; i++) {
  let word = "";
  for (let j = sentence[i].length - 1; j >= 0; j--) {
    word += sentence[i][j];
  }
  arr.push(word);
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}