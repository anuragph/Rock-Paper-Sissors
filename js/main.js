// Make the computer's selection
function computerPlay() {
    let chooseFrom = ['rock', 'paper', 'scissors'];
    let computerSelection = chooseFrom[Math.floor(Math.random() * 3)];

    return computerSelection;
}

// Make the player's selection from click event and play one round
function playRound(playerSelection) {

    playerSelection  = playerSelection.target.value; // triggered by click event
    playerSelection  = playerSelection .toLowerCase();

    computerSelection = computerPlay();
    
    let message = '';
    
    // Game logic
    if (playerSelection == 'rock') {
        switch(computerSelection) {
            case 'rock':
                message = "It's a draw.";
                break;
            case 'paper':
                message = 'Paper beats rock.';
                computerScore++;
                break;
            case 'scissors':
                message = 'Rock beats scissors.';
                playerScore++;
        }  
    } else if(playerSelection == 'paper') {
        switch(computerSelection) {
            case 'rock':
                message = 'Paper beats rock.';
                playerScore++;
                break;
            case 'paper':
                message = "It's a draw";
                break;
            case 'scissors':
                message = 'Scissors beat paper.';
                computerScore++;
        }
    } else {
        switch(computerSelection) {
            case 'rock':
                message = 'Rock beats scissors.';
                computerScore++;
                break;
            case 'paper':
                message = 'Scissors beat paper.';
                playerScore++;
                break;
            case 'scissors':
                message = "It's a draw";
        }   
    }
    message = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${message}`;
    scoreArray = [playerScore, computerScore];
    roundResults(message, scoreArray);
    return scoreArray;
}


// Show results and live score in DOM
function roundResults(message, scoreArray) {

    playerScore = scoreArray[0];
    computerScore = scoreArray[1];

    const resultText = document.querySelector('#result-text');
    const scoreboard = document.querySelector('#scoreboard');
    
    resultText.textContent = message;
    scoreboard.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
}


// Declare final winner
function declareWinner() {

    const winnerText = document.querySelector('#winner-text');
    if (playerScore === 5) {
        winnerText.innerHTML = '<p>YOU WIN! :) <br> ...Refresh page to play again.</p>'
    } else {
        winnerText.innerHTML = '<p>The computer wins. :( <br> ...Refresh page to play again.</p>'
    }
}


let scoreArray = [0, 0];
let playerScore = scoreArray[0];
let computerScore = scoreArray[1];

let playerSelection;
let computerSelection;

const gameButtons = document.querySelectorAll('.game-button');

// Create event listeners for each button to call playRound(..)
// and declare winner
gameButtons.forEach((gameButton) => {
    gameButton.addEventListener('click', (e) => {
        playRound(e);
        console.log(playerScore);
        console.log(computerScore);
        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
    });
})

