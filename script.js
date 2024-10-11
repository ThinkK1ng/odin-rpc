// console.log('Hello World');

// Creating variables
const choices = ["rock", "paper", "scissors"];

// creating get computer choice function
function getComputerChoice(arr) {
  const randomChoice = Math.floor(Math.random() * arr.length);
  return arr[randomChoice];
}
// creating variable for choosing rock, paper, or scissors
const randomComputerChoice = getComputerChoice(choices);
console.log(randomComputerChoice);

// function to run on "Play Game" button click
function getHumanChoice(askChoice) {
  // Creating a variable with a prompt as a value for the user choice.
  askChoice = prompt(
    "Can you beat the computer!? Input rock, paper, or scissors to test your luck!"
  );
  console.log("button clicked");
  if (askChoice === choices[0]) {
      console.log("rock");
  } else if (askChoice === choices[1]) {
      console.log("paper");
  } else if (askChoice === choices[2]) {
      console.log("scissors");
  } else {
    // run this code if the user doesn't make a selection or inputs a different word
      let retry = prompt("You haven't made a selection! Input rock, paper, or scissors.");
      if (retry === choices[0]) {
        console.log("rock");
      } else if (retry === choices[1]) {
        console.log("paper");
    } else if (retry === choices[2]) {
        console.log("scissors");
    }
  }
}

// creating button variable
button = document.getElementById("bttn");

// creating event listener for executing the getHumanChoice function
button.addEventListener("click", getHumanChoice);
