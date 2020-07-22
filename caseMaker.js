const makeCase = function (input, cases) {
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
  else if (cases === "vowel") {
    //   let vowelInput = ""
    //   for (let i = 0; i < input.length; i++) {
    //     ///console.log(input[i])
    //     if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" ||  input[i] === "u") {
    //       vowelInput = input.replace(`${input[i]}`, `${input[i].toUpperCase()}`)
    //     }   
    //   }
    //   return vowelInput
    // }
    let vowelInput = input.split(' ')
    for (let j = 0; j < vowelInput.length; j++) {
      for (let i = 0; i < vowelInput[j].length; i++) {
        if (vowelInput[j][i] === "a" || vowelInput[j][i] === "e" || vowelInput[j][i] === "i" || vowelInput[j][i] === "o" || vowelInput[j][i] === "u") {
          vowelInput[j] = vowelInput[j].replace(`${vowelInput[j][i]}`, `${vowelInput[j].charAt(i).toUpperCase()}`)
        }
      }
    }
    vowelInput = vowelInput.join(' ')
    return vowelInput;
  }
  else if (cases === "consonant") {
    let consonantInput = input.split(' ')
    for (let j = 0; j < consonantInput.length; j++) {
      for (let i = 0; i < consonantInput[j].length; i++) {
        if (consonantInput[j][i] !== "a" && consonantInput[j][i] !== "e" && consonantInput[j][i] !== "i" && consonantInput[j][i] !== "o" && consonantInput[j][i] !== "u") {
          consonantInput[j] = consonantInput[j].replace(`${consonantInput[j][i]}`, `${consonantInput[j].charAt(i).toUpperCase()}`)
        }
      }
    }
    consonantInput = consonantInput.join(' ')
    return consonantInput;
  }
  else if (cases.includes("upper")) {
      let upperInput = input.split(" ").join("_").toUpperCase()
      return upperInput
  }
  else if (cases.includes("lower")) {
      let lowerInput = input.split(" ").join("_").toLowerCase()
      return lowerInput
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