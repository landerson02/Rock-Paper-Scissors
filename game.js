// Game logic
function getComputerChoice() {
    let x = Math.random() * 3;
    if(x > 2) return "scissors";
    else if(x > 1) return "rock";
    else return "paper";
}

function playRound(playerChoice, compChoice) {
    if(playerChoice === compChoice) return "Tie Game! :|";
    else if ((playerChoice === "scissors" && compChoice==="paper")
        || (playerChoice === "rock" && compChoice === "scissors")
        || (playerChoice === "paper" && compChoice === "rock")) {
        return "You Win! :)";
    } else return "You Lose! :("
}

function playGame() {
    let compScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++) {
        let res = playRound(prompt("Enter play"), getComputerChoice());
        if(res === "You Win! :)") playerScore++;
        else if(res === "You Lose! :(") compScore++;
    }
    let out = compScore > playerScore ? "You Lose! :(" : "You Win! :)";
    console.log(out);
}