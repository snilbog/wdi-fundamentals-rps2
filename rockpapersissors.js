function getInput() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.")
   var answer = prompt();
   return answer;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else if (randomNumber < 1.00) {
        return 'scissors';
    }
}

function getPlayerMove(move) {
  return move = move || getInput;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /* Your Expression */
}

function getComputerMove(move) {
  return move === randomPlay ()
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     /* Your Expression */
}

function getWinner(playerMove, computerMove) {
  if (playerMove === "rock") {
    if (computerMove === "scissors") {
      winner = "player";
    } if (computerMove === "paper") {
      winner = "computer";
    } if (computerMove === "rock") {
      winner = "tie";
    }
    
    if (playerMove === "paper" ) {
      if (computerMove === "rock") {
        winner = "player";
      } if (computerMove === "scissors") {
        winner = "computer";
      } if (computerMove === "paper") {
        winner = "tie";
      }
    
      if (playerMove === "scissors") {
        if (computerMove === "paper") {
          winner = "player";
        } if (computerMove === "rock") {
          winner = "computer";
        } if (computerMove === "scissors") {
          winner = "tie";
        }
      } 
    return winner;
  }
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
}
function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;

  while (playerWins < 5) || (computerWins < 5) {
      getInput();
      randomPlay();
      getPlayerMove();
      getComputerMove();
      getWinner();
      if ("playyer") {
        (playerWins += 1);
      }
    }

  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
  return [playerWins, computerWins];
};

git push origin student
