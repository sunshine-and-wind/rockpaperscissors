function playRound(computerSelection, playerSelection) {

    let result = '';

    if (computerSelection == playerSelection) {
        result = 'You both chose ' + playerSelection + '. The result is a tie.';
        return 'TIE';
    } else if ((computerSelection == 'rock') && (playerSelection == 'paper')) {
        result = 'Paper beats rock. Player 1 wins.';
        return 'PLAYER';
    } else if ((computerSelection == 'rock') && (playerSelection == 'scissors')) {
        result = 'Rock beats scissors. Computer wins.';
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
}
;
