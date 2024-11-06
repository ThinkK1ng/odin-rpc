// console.log('Hello World');

// Creating choices variable
const choices = ["rock", "paper", "scissors"];

// creating get computer choice function
function getComputerChoice(arr) {
  const randomChoice = Math.floor(Math.random() * arr.length);
  return arr[randomChoice];
}

// function to acquire the human's choice
function getHumanChoice(askChoice) {
  // Creating a variable with a prompt as a value for the user choice.
  askChoice = prompt(
    "Can you beat the computer!? Input rock, paper, or scissors to test your luck!"
  );
  console.log("button clicked");
  askChoice = askChoice.toLowerCase();
  if (
    askChoice === choices[0] ||
    askChoice === choices[1] ||
    askChoice === choices[2]
  ) {
    return askChoice;
  } else {
    // run this code if the user doesn't make a selection or inputs a different word
    let retry = prompt(
      "You haven't made a selection! Input rock, paper, or scissors."
    );
    retry = retry.toLowerCase();
    if (retry === choices[0] || retry === choices[1] || retry === choices[2]) {
      return retry;
    }
  }
}

// creating score variables
let humanScore = 0;
let computerScore = 0;

// creating button variable
button = document.querySelector("#bttn");

// creating function for playing rounds in the game.
function playRound(humanChoice, computerChoice) {
  // if the player wins
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `The Player wins the round! The score is now Player: ${humanScore} Computer: ${computerScore}`
    );
  }
  // if the computer wins
  else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(
      `Oh no! The computer won the round! The score is now Player: ${humanScore} Computer: ${computerScore}`
    );
  }
  // if it is a draw
  else if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log(
      `It's a draw! The score is now Player: ${humanScore} Computer: ${computerScore}`
    );
  }
}

button.addEventListener("click", playGame);

// Play Game function
function playGame() {
  // alert declaring the start of the game.
  alert(
    "The AI takeover has begun! The world's future is at stake, but there is hope for humanity to come out on top! There's only one way to decide the fate of the world! Rock. Paper. Scissors. Defeat the computer in a best of five match to have humanity reign supreme! Lose, and watch the world around you descend into to digital chaos. Click the Play Round button below to begin. Good luck, player!"
  );

  // changing old button event from playGame to playRound.
  button.removeEventListener("click", playGame);

  // changing the name of the button
  button.innerText = "Play Round!";

  // creating event listener for executing the the playRound function
  button.addEventListener("click", () => {
    humanSelection = getHumanChoice(); // Get human choice on each click
    randomComputerChoice = getComputerChoice(choices); // Get a new computer choice.

    //   Logs the choices of the user and computer to the console.
    console.log("Human choice:", humanSelection);
    console.log("Computer choice:", randomComputerChoice);

    //   playGame function is called and executes.
    playRound(humanSelection, randomComputerChoice);

    // check for winner after each round and declare the winner
    if (humanScore === 3) {
      console.log("You did it! You've won the game! Congratulations, player!");
      button.innerText = "Play again?";
      button.removeEventListener("click", playRound);
    } else if (computerScore === 3) {
      console.log(
        "Oh no! The computer has won the game! AI World domination is upon us!"
      );
      button.innerText = "Play again?";
      button.removeEventListener("click", playRound);
    }
  });
}
