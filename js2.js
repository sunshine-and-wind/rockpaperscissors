let computerSelection;
let playerSelection;
let computerWins = 0;
let playerWins = 0;
let tieCount = 0;
let totalRounds = 0;

let round = document.getElementById('round').textContent;
let score = document.getElementById('score').textContent;
let result = document.getElementById('result').textContent;
let reset = document.getElementById('reset').innerHTML;
let game = document.getElementById('game').textContent;
let img = document.querySelectorAll('img');
let divbox = document.querySelector('.divbox');

let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        console.log(playerSelection);
        getComputerChoice()
        document.getElementById('select').textContent = `You chose ${playerSelection}. The computer has chosen ${computerSelection}.`;
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
        document.getElementById('round').textContent = 'You both chose ' + playerSelection + '. The result is a tie.';
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
    document.getElementById('score').textContent = 'Player one: ' + playerWins + ' || Computer: ' + computerWins + ' || Ties: ' + tieCount;
};

function displayResult() {
    if (playerWins > computerWins) { 
        document.getElementById("result").textContent = ('Player One beats computer: ' + playerWins + ' to ' + computerWins);
    } else if (playerWins < computerWins) {
        document.getElementById("result").textContent = ('Computer beats Player One: ' + computerWins + ' to ' + playerWins);
    }; 

    document.getElementById('game').textContent = "GAME OVER!!"
    document.getElementById("reset").innerHTML = "<button onclick='resetGame()'>PLAY AGAIN??</button>"
    computerWins = 0;
    playerWins = 0;
    tieCount = 0;
    totalRounds = 0;
    divbox.style.display = "none";
}


function resetGame() {
document.getElementById('select').textContent='';
document.getElementById('round').textContent='';
document.getElementById('result').textContent='';
document.getElementById('score').textContent='Player one: 0 || Computer: 0 || Ties: 0';
document.getElementById('reset').innerHTML='';
document.getElementById('game').innerHTML='';
divbox.style.display = "block";
};
