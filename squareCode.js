const squareCode = function(message) {
  // get text length
  // square root then round up
  // split up characters based on the result of square root, into array,
  // iterate array, take each first character and put into sentence.
  let noSpace = message.split(" ").join("")
  let columns = Math.ceil(Math.sqrt(noSpace.length));
  let arr = []
  let newMessage = ""
  let finalMessage = ""
  for (let i = 0; i < Math.round(noSpace.length/columns); i++) {
    for (let j = 0; j < columns; j++) {
      if (!noSpace[j + (i * columns)]) {
        break;
      }
      else {
      newMessage += noSpace[j + (i * columns)]
      }
    }
    arr.push(newMessage)
    newMessage = ""
  }
  // add first characters of elements into string
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr[j][i]) {
        break;
      }
      else {
      finalMessage += arr[j][i];
      }
    }
    finalMessage += " "
  }
  return finalMessage
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));