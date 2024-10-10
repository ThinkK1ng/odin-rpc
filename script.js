// console.log('Hello World');

// Creating variables
const choices = ["rock", "paper", "scissors"]

// creating get computer choice function
function getComputerChoice(arr) {
    const randomChoice = Math.floor(Math.random() * arr.length);
    return arr[randomChoice];
}
// creating variable for choosing rock, paper, or scissors
const randomComputerChoice = getComputerChoice(choices);
console.log(randomComputerChoice);

function getHumanChoice() {
    
}