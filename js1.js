let computerSelection;
let playerSelection;
let computerWins = 0;
let playerWins = 0;
let tieCount = 0;
let totalRounds = 0;
let winner;

let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonId = button.querySelector("id")
        playerSelection = buttonId;
        playRound(computerSelection, playerSelection);
    
    })

});

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    computerSelection = choices[random];
    console.log(`The computer has chosen ${computerSelection}.`);
    return computerSelection;
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

