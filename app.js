
//  Get user choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  // conditions if the userInput is equal to rock, scissors, paper, bomb
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error')
  }
};

// condition for the computer's choice
const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper';
      break;
  }
}

// Condition to determine who is the winner
const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
    return 'Game is a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer win!';
    } else {
      return 'You win!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer win!';
    } else {
      return 'You win!'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer win';
    } else {
      return 'You win!';
    }
  }

  if (userChoice === 'bomb') {
    return 'You rock!'
  }
}

// Let's start to play the game
const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};

playGame()
