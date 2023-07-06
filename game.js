// Game logic
function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
        case 0: return "Scissors";
        case 1: return "Paper";
        case 2: return "Rock";
    }
}

function playRound(playerChoice, compChoice) {
    if(playerChoice === compChoice) return 0;
    else if ((playerChoice === "Scissors" && compChoice==="Paper")
        || (playerChoice === "Rock" && compChoice === "Scissors")
        || (playerChoice === "Paper" && compChoice === "Rock")) {
        return 1;
    } else return -1;
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let res = playRound(prompt("Enter play"), getComputerChoice());
        if(res === "You Win! :)") playerScore++;
        else if(res === "You Lose! :(") compScore++;
    }
}


// User Interface
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");
const playerScoreText = document.getElementById("playerScore");
const playerMove = document.getElementById("playerMove");
const compScoreText = document.getElementById("compScore");
const compMove = document.getElementById("compMove");
const gameStatus = document.getElementById("gameStatus");
let compScore = 0;
let playerScore = 0;

rockButton.addEventListener("click", () => handleClick("Rock"));
paperButton.addEventListener("click", () => handleClick("Paper"));
scissorsButton.addEventListener("click", () => handleClick("Scissors"));

function handleClick(input) {
    const pimg = document.createElement('img');
    pimg.src = "Assets/" + input + ".png";
    playerMove.innerHTML = '';
    playerMove.appendChild(pimg);

    let compChoice = getComputerChoice();
    const cimg = document.createElement("img");
    cimg.src = "Assets/" + compChoice + ".png";
    compMove.innerHTML = '';
    compMove.appendChild(cimg);
    switch (playRound(input, compChoice)) {
        case 0:
            gameStatus.textContent = "It's a Tie!"
            break;
        case 1:
            gameStatus.textContent = "You win the Round!"
            playerScore++;
            break;
        case -1:
            gameStatus.textContent = "You lose the Round."
            compScore++;
            break;
    }
    playerScoreText.textContent = `You: ${playerScore}`;
    compScoreText.textContent = `Opponent: ${compScore}`;
}