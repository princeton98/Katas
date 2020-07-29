let prompt = require("prompt-sync")();

// code below (replace this example)
let number = Math.floor(Math.random() * 100);
let attempts = [];
let answer
while (answer !== number) {
 answer = prompt("Guess a number: ");
 answer = Number(answer);
   if (attempts.includes(answer)) {
     console.log("Already Guessed!");
   }
  else if (answer < number) {
    console.log("Too Low!");
    attempts.push(answer)
  }
  else if (answer > number) {
    console.log("Too High!");
    attempts.push(answer)
  }
  else if (answer === number) {
    attempts.push(answer)
    console.log(`You got it! You took ${attempts.length} attempts!`);
    break;
  }
  else {
    console.log("Not a number! Try again");
  }
}
