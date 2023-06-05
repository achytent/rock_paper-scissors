/* 
    rock - 0
    paper - 1
    scissors - 2
*/

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    switch(choice){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getPlayerChoice(event){
    return event.target.id;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) return "draw!"

    switch(playerSelection){
        case "rock":
            if (computerSelection == "scissors"){
                playerScore++;
                return "You win!";
            } else {
                computerScore++;
                return "You lose!"
            }
        case "paper":
            if (computerSelection == "rock"){
                playerScore++;
                return "You win!"
            } else {
                computerScore++;
                return "You lose!"
            }
        case "scissors":
            if (computerSelection == "paper"){
                playerScore++;
                return "You win!"
            } else {
                computerScore++;
                return "You lose!"
            }
    }
}

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('div.result');
const playerScoreSpan = document.querySelector('span.player-score')
const computerScoreSpan = document.querySelector('span.computer-score')

buttons.forEach(button => button.addEventListener('click', function (event) {
    const result = playRound(getPlayerChoice(event), getComputerChoice())
    resultDiv.textContent = result;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    if(playerScore == 5 || computerScore == 5){
        buttons.forEach(button => button.remove())
    }
}))