/* 
    rock - 0
    paper - 1
    scissors - 2
*/

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    switch(choice){
        case 0:
            return "rock"
            break
        case 1:
            return "paper"
            break
        case 2:
            return "scissors"
            break
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) return "draw!"

    switch(playerSelection){
        case "rock":
            if (computerSelection == "scissors"){
                return "You win!"
            } else {
                return "You lose!"
            }
        case "paper":
            if (computerSelection == "rock"){
                return "You win!"
            } else {
                return "You lose!"
            }
        case "scissors":
            if (computerSelection == "paper"){
                return "You win!"
            } else {
                return "You lose!"
            }
    }
}

function getPlayerChoice(){
    const playerSelection = prompt("Enter your choice")
    return playerSelection.toLowerCase()
}

function game() {
    for(let i = 0; i < 5; i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice()))
    }
}

game()