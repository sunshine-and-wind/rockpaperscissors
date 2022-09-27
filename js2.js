let computerSelection;
let playerSelection;
let computerWins = 0;
let playerWins = 0;
let tieCount = 0;
let totalRounds = 0;

let roundNumber = document.getElementById('roundNumber').textContent;
let round = document.getElementById('round').textContent;
let result = document.getElementById('result').textContent;
let reset = document.getElementById('reset').innerHTML;
let game = document.getElementById('game').textContent;
let img = document.querySelectorAll('img');

let pw = document.getElementById('pw').textContent;
let cw = document.getElementById('cw').textContent;
let tc = document.getElementById('tc').textContent;

let divbox = document.querySelector('.divbox');
let header = document.querySelector('.header');

let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        console.log(playerSelection);
        getComputerChoice()
        totalRounds += 1;
        document.getElementById('roundNumber').textContent = `ROUND ${totalRounds}`;
        document.getElementById('select').textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}.`;
        playRound(computerSelection, playerSelection);
        if ((computerWins == 5) || (playerWins == 5)) {
            displayResult();
        }
    })
});

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    computerSelection = choices[random];
    return computerSelection;
};

function playRound(computerSelection, playerSelection) {

    if (computerSelection == playerSelection) {
        document.getElementById('round').textContent = 'The result is a tie.';
        tieCount += 1;
    } else if ((computerSelection == 'rock') && (playerSelection == 'paper')) {
        document.getElementById('round').textContent = 'Paper beats rock. Player 1 wins.';
        playerWins += 1;
    } else if ((computerSelection == 'rock') && (playerSelection == 'scissors')) {
        document.getElementById('round').textContent = 'Rock beats scissors. Computer wins.';
        computerWins += 1;
    } else if ((computerSelection == 'paper') && (playerSelection == 'rock')) {
        document.getElementById('round').textContent = 'Paper beats rock. Computer wins.';
        computerWins += 1;
    } else if ((computerSelection == 'paper') && (playerSelection == 'scissors')) {
        document.getElementById('round').textContent = 'Scissors beats paper. Player 1 wins.';
        playerWins += 1;
    } else if ((computerSelection == 'scissors') && (playerSelection == 'rock')) {
        document.getElementById('round').textContent = 'Rock beats scissors. Player 1 wins.';
        playerWins += 1;
    } else if ((computerSelection == 'scissors') && (playerSelection == 'paper')) {
        document.getElementById('round').textContent = 'Scissors beats paper. Computer wins.';
        computerWins += 1;
    };
    document.getElementById('pw').textContent = 'Player one: ' + playerWins;
    document.getElementById('cw').textContent = 'Computer: ' + computerWins;
    document.getElementById('tc').textContent = 'Ties: ' + tieCount;
};

function displayResult() {
    if (playerWins > computerWins) { 
        document.getElementById('game').textContent = "YOU WIN!"
        document.getElementById("result").textContent = ('Player One beats computer: ' + playerWins + ' to ' + computerWins);
    } else if (playerWins < computerWins) {
        document.getElementById('game').textContent = "YOU LOSE!"
        document.getElementById("result").textContent = ('Computer beats Player One: ' + computerWins + ' to ' + playerWins);
    }; 

    document.getElementById("reset").innerHTML = "<button onclick='resetGame()'>Play Again?</button>"
    computerWins = 0;
    playerWins = 0;
    tieCount = 0;
    totalRounds = 0
    divbox.style.display = "none";
    header.style.display = "none";
}


function resetGame() {
document.getElementById('select').textContent='';
document.getElementById('round').textContent='';
document.getElementById('result').textContent='';
document.getElementById('pw').textContent = 'Player one: ' + playerWins;
document.getElementById('cw').textContent = 'Computer: ' + computerWins;
document.getElementById('tc').textContent = 'Ties: ' + tieCount;
document.getElementById('reset').innerHTML='';
document.getElementById('game').innerHTML='';
document.getElementById('roundNumber').textContent = '';
divbox.style.display = "block";
header.style.display = "block";

};
