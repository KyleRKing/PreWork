///Kyles new
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove() {
    var move = null;
    while( (move != 'rock') && (move != 'paper') && (move != 'scissors')) {
        move = getInput();
    }
    return move;

    
}

function getComputerMove() {
    return randomPlay();    
}

function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie"; 
    } else if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
            winner = 'player';
        } else {
            winner = 'computer';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'player';
        } else {
            winner = 'computer';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'paper') {
            winner = 'player';
        }
        else {
            winner = 'computer';
        }
    }
    return winner;
}

function playToFive() { 
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5){
        var computerMove = getComputerMove();
        var playerMove = getPlayerMove();
        
        var winner = getWinner(playerMove, computerMove);
        
  //      console.log(playerMove + 'was chosen by player' + computerMove + 'was choseen by computer');
        if (winner === 'player') {
            playerWins++;
            console.log('The winner is ' + winner);

        }  else if (winner === 'computer'){
            computerWins++;
            console.log('The winner is ' + winner);
        } else {
            console.log('Tie');
        }
    }
    
    if (playerWins > computerWins) {
        console.log("Player Won The Game!");
    } else {
        console.log("Computer Won The Game!");
    }
    
//    console.log("Player: " + playerWins + " vs Computer: " + computerWins);
    
     return [playerWins, computerWins];
}


playToFive();












