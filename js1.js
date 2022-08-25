let computerSelection;
let playerSelection;
let computerWins = 0;
let playerWins = 0;
let tieCount = 0;
let totalRounds = 0;

function playRound(computerSelection, playerSelection) {
    function getUserChoice() {
    let userChoice = prompt('Please choose: Rock, Paper, or Scissors: ');
    playerSelection = userChoice.toLowerCase();
    
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        getUserChoice();
        } else { document.getElementById("PC").innerHTML = ("You chose " + playerSelection)
    }; return playerSelection;
}

getUserChoice();

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    computerSelection = choices[random];
    document.getElementById("CC").innerHTML = (`The computer has chosen ${computerSelection}.`);
    return computerSelection;
}

getComputerChoice();

    if (computerSelection == playerSelection) {
        console.log('You both chose ' + playerSelection + '. The result is a tie.');
        return 'TIE';
    } else if ((computerSelection == 'rock') && (playerSelection == 'paper')) {
        console.log('Paper beats rock. Player 1 wins.');
        return 'PLAYER';
    } else if ((computerSelection == 'rock') && (playerSelection == 'scissors')) {
        console.log('Rock beats scissors. Computer wins.')
        return 'COMPUTER';
    } else if ((computerSelection == 'paper') && (playerSelection == 'rock')) {
        console.log('Paper beats rock. Computer wins.'); 
        return 'COMPUTER';
    } else if ((computerSelection == 'paper') && (playerSelection == 'scissors')) {
         console.log('Scissors beats paper. Player 1 wins.');
         return 'PLAYER';
    } else if ((computerSelection == 'scissors') && (playerSelection == 'rock')) {
         console.log('Rock beats scissors. Player 1 wins.');
         return 'PLAYER';
    } else if ((computerSelection == 'scissors') && (playerSelection == 'paper')) {
         console.log('Scissors beats paper. Computer wins.');
         return 'COMPUTER';
    } else { console.log('no game');
    };    
};

for (i = 0; i <5; i++) {
document.getElementById("round").innerHTML = ('Round ' +  (i + 1));
let x = playRound(computerSelection, playerSelection);
if (x == 'TIE') { tieCount += 1 }
else if (x == 'PLAYER') { playerWins += 1 }
else if (x == 'COMPUTER') {computerWins += 1 }

console.log('Player Wins: ', playerWins);
console.log('Computer Wins: ', computerWins);
console.log('Ties: ', tieCount);
totalRounds += 1;
console.log('Total Rounds Played: ', totalRounds);
if ((playerWins === 3) || (computerWins === 3)) { break; }
}

if (playerWins > computerWins) { 
    console.log('Player beats computer: ', playerWins, 'to ', computerWins);
} else if (playerWins < computerWins) {
    console.log('Computer beats Player 1: ', computerWins, 'to ', playerWins);
} else if (playerWins == computerWins) { 
    console.log('Tie game, no winner. Play again.')
};
