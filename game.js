// Game logic
function getComputerChoice() {
    let x = Math.random() * 3;
    if(x > 2) return "scissors";
    else if(x > 1) return "rock";
    else return "paper";
}

function playRound(playerChoice, compChoice) {
    if(playerChoice === compChoice) return 0;
    else if ((playerChoice === "scissors" && compChoice==="paper")
        || (playerChoice === "rock" && compChoice === "scissors")
        || (playerChoice === "paper" && compChoice === "rock")) {
        return 1;
    } else return -1;
}

function playGame() {
    let compScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++) {
        let res = playRound(prompt("Enter play"), getComputerChoice());
        if(res === "You Win! :)") playerScore++;
        else if(res === "You Lose! :(") compScore++;
    }
}


// User Interface
const rockButton = document.getElementById("rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");

rockButton.addEventListener('click', () => console.log(123));
