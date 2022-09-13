

function game() {

// define variables
// replace empty div with choice container
// get user choice
// get computer choice
// determine winner 
// return result of round
// update WLT containers
// if one player has three wins end game

// let displayBlock = document.getElementById('main');
// displayBlock.style.display = "block";

let computerSelection;
let playerSelection;
let computerWins = 0;
let playerWins = 0;
let tieCount = 0;
let totalRounds = 0;
let winner;

function getUserChoice() {
    let userChoice = prompt('Please choose: Rock, Paper, or Scissors: ');
    let strip = userChoice.trim()
    playerSelection = strip.toLowerCase();
    
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        alert("You must type 'Rock', 'Paper', or 'Scissors' to play");
        getUserChoice();
        } else { console.log("You chose " + playerSelection + '.');
    }; return playerSelection;
};

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    computerSelection = choices[random];
    console.log(`The computer has chosen ${computerSelection}.`);
    return computerSelection;
};

function playRound(computerSelection, playerSelection) {

    let result = ''

    if (computerSelection == playerSelection) {
        result = 'You both chose ' + playerSelection + '. The result is a tie.';
        return 'TIE';
    } else if ((computerSelection == 'rock') && (playerSelection == 'paper')) {
        result = 'Paper beats rock. Player 1 wins.';
        return 'PLAYER';
    } else if ((computerSelection == 'rock') && (playerSelection == 'scissors')) {
        result =  'Rock beats scissors. Computer wins.';
        return 'COMPUTER';
    } else if ((computerSelection == 'paper') && (playerSelection == 'rock')) {
        result = 'Paper beats rock. Computer wins'; 
        return 'COMPUTER';
    } else if ((computerSelection == 'paper') && (playerSelection == 'scissors')) {
        result = 'Scissors beats paper. Player 1 wins.';
        return 'PLAYER';
    } else if ((computerSelection == 'scissors') && (playerSelection == 'rock')) {
        result = 'Rock beats scissors. Player 1 wins.';
        return 'PLAYER';
    } else if ((computerSelection == 'scissors') && (playerSelection == 'paper')) {
        result = 'Scissors beats paper. Computer wins.';
        return 'COMPUTER';
    };    
};

for (i = 0; i <5; i++) {
getUserChoice();
getComputerChoice();
let x = playRound(computerSelection, playerSelection);
console.log(result);
if (x == 'TIE') { i = (i-1); tieCount += 1 }
else if (x == 'PLAYER') { playerWins += 1 }
else if (x == 'COMPUTER') {computerWins += 1 }

console.log('Player One:', playerWins, 'Computer:', computerWins, 'Ties:', tieCount);
totalRounds += 1;
document.getElementById("total").textContent = 'Total Rounds Played: ' + totalRounds;
if ((playerWins === 3) || (computerWins === 3)) { break; }
}


if (playerWins > computerWins) { 
    winner = 'PLAYER ONE';
    document.getElementById("result").textContent = ('Player One beats computer: ' + playerWins + ' to ' + computerWins);
} else if (playerWins < computerWins) {
    winner = 'COMPUTER';
    document.getElementById("result").textContent = ('Computer beats Player One: ' + computerWins + ' to ' + playerWins);
} 

};

function rock() {
    const clickRock = document.querySelector('.rock');
    clickRock.classList.add('playing');
    return("ROCK");
}