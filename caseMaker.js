const makeCase = function(input, cases) {
  if (cases === "camel") {
    let camelInput = ""
    camelInput = input.split(" ");
      for (let i = 1; i < camelInput.length; i++) {
        camelInput[i] = camelInput[i].charAt(0).toUpperCase() + camelInput[i].slice(1)
      }
      camelInput = camelInput.join("")
    return camelInput;
  }
  else if (cases === "pascal") {
    let pascalInput = ""
    pascalInput = input.split(" ");
      for (let i = 0; i < pascalInput.length; i++) {
        pascalInput[i] = pascalInput[i].charAt(0).toUpperCase() + pascalInput[i].slice(1)
      }
      pascalInput = pascalInput.join("")
    return pascalInput;
  }
  else if (cases === "snake") {
    let snakeInput = input.split(" ").join("_")
    return snakeInput
  }
  else if (cases === "kebab") {
    let kebabInput = input.split(" ").join("-")
    return kebabInput
  }
  else if (cases === "title") {
    let titleInput = ""
    titleInput = input.split(" ");
      for (let i = 0; i < titleInput.length; i++) {
        titleInput[i] = titleInput[i].charAt(0).toUpperCase() + titleInput[i].slice(1)
      }
      titleInput = titleInput.join(" ")
    return titleInput;
  }
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));