function computerPlay() {
    let chooseFrom = ['rock', 'paper', 'scissors'];
    let computerSelection = chooseFrom[Math.floor(Math.random() * 3)];

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {

    playerSelection  = prompt("Choose 'Rock', 'Paper' or 'Scissors': ");
    playerSelection  = playerSelection .toLowerCase();

    computerSelection = computerPlay();
    
    let message = '';
    
    if (playerSelection == 'rock') {
        switch(computerSelection) {
            case 'rock':
                message = "It's a draw.";
                break;
            case 'paper':
                message = 'Paper beats rock. You lose.';
                break;
            case 'scissors':
                message = 'Rock beats scissors. You win!';
                score++;
        }  
    } else if(playerSelection == 'paper') {
        switch(computerSelection) {
            case 'rock':
                message = 'Paper beats rock. You win!';
                score++;
                break;
            case 'paper':
                message = "It's a draw";
                break;
            case 'sissors':
                message = 'Scissors beat paper. You lose.';
        }
    } else {
        switch(computerSelection) {
            case 'rock':
                message = 'Rock beats scissors. You lose.';
                break;
            case 'paper':
                message = 'Scissors beat paper. You win!';
                score++
                break;
            case 'scissors':
                message = "It's a draw";
        }   
    }
    message = `You chose ${playerSelection}.\nComputer chose ${computerSelection}.\n${message}`
    console.log(message);
    return score;
}

function game() {
    
    for(let i=0; i<5; i++) {
        playRound(playerSelection , computerSelection);
    }
    console.log(`Score: ${score}/5`);
}

let score = 0;

let playerSelection;
let computerSelection;

game();