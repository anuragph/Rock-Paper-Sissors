function computerPlay() {
    let chooseFrom = ['rock', 'paper', 'sissors'];
    let computerSelection = chooseFrom[Math.floor(Math.random() * 3)];

    return computerSelection;
}

function play(playerSelection, computerSelection) {
    
    let message = '';
    
    if (playerSelection == 'rock') {
        switch(computerSelection) {
            case 'rock':
                message = "It's a draw.";
                break;
            case 'paper':
                message = 'Paper beats rock. You lose.';
                break;
            case 'sissors':
                message = 'Rock beats sissors. You win!';
        }  
    } else if(playerSelection == 'paper') {
        switch(computerSelection) {
            case 'rock':
                message = 'Paper beats rock. You win!';
                break;
            case 'paper':
                message = "It's a draw";
                break;
            case 'sissors':
                message = 'Sissors beat paper. You lose.';
        }
    } else {
        switch(computerSelection) {
            case 'rock':
                message = 'Rock beats sissors. You lose.';
                break;
            case 'paper':
                message = 'Sissors beat paper. You win!';
                break;
            case 'sissors':
                message = "It's a draw";
        }   
    }
    console.log(message);
}



let playerInput = prompt("Choose 'Rock', 'Paper' or 'Sissors': ");
playerInput = playerInput.toLowerCase();

let computerInput = computerPlay();



play(playerInput, computerInput);