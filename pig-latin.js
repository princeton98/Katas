let sentence = process.argv.slice(2);
for (let i = 0; i < sentence.length; i++) {
  sentence[i] += sentence[i][0];
  sentence[i] = sentence[i].slice(1);
  sentence[i] += "ay"
}
sentence = sentence.join(" ");
console.log(sentence);