const getUserChoice = userInput => { 
    userInput = userInput.toLowerCase()
    if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors'){
      return userInput
    }
    else{
      console.log('Please enter the correct choice')
    }
    }
  //console.log(getUserChoice('rocky'))
  function getComputerChoice(){
    switch (Math.floor(Math.random()*3)){
      case 0:
        return 'rock'
        break;
      case 1:
        return 'paper'
        break;
      case 2:
        return 'scissors'
        break;
      default:
        return 'paper'
        break;
    }
  }
  //console.log(getComputerChoice())
  const determineWinner = function(userChoice,computerChoice){
    if (userChoice === computerChoice){
      return 'game was a tie'
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'computer Won'
      }else{
        return 'User Won'
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Computer Won'
      }else{
        return 'User Won'
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Computer Won'
      }else{
        return 'User Won'
      }
    }
  }
  //console.log(determineWinner('paper','scissors'))
  function playGame(){
    var userChoice = getUserChoice('PAPER');
    var computerChoice = getComputerChoice()
    console.log('your choice: ' + userChoice)
    console.log('computer\'s Choice: ' + computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
  }
  playGame()