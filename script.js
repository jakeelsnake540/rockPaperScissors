 //Computers Choice
 
 let computersChoice = '';
 let computerPlay = function(){
    let randomizer = Math.random(1);
    if (randomizer <= .33) {
        computersChoice = 'rock';
    }
    else if (randomizer <= .66){
        computersChoice = 'paper';
    }
    else{
        computersChoice = 'scissors';
    }
};
computerPlay();





//Game Time!

let computerScore = 0;
let userScore = 0;
document.getElementById("userScore").innerHTML = parseInt(userScore);
document.getElementById("computerScore").innerHTML = parseInt(computerScore);

let play = function() {
    


//user input 
    userInput = prompt('Choose Rock, Paper, or Scissors').toLowerCase();
    computerPlay();

    

  if (userInput === 'rock' && computersChoice === 'paper') {
      alert('You lose! Paper covers rock');
      computerScore ++;
      document.getElementById("computerScore").innerHTML = parseInt(computerScore);
      score();
  }
  else if (userInput === 'paper' && computersChoice === 'scissors'){
      alert('You lose! Scissors cut paper');
      computerScore ++;
      document.getElementById("computerScore").innerHTML = parseInt(computerScore);
      score();
  }
  else if (userInput === 'scissors' && computersChoice === 'rock'){
      alert('You lose! Rock smash scissors');
      computerScore ++;
      document.getElementById("computerScore").innerHTML = parseInt(computerScore);
      score();
  }
  else if (userInput === 'rock' && computersChoice === 'scissors') {
      alert('You win! Rock smash scissor');
      userScore ++;
      document.getElementById("userScore").innerHTML = parseInt(userScore);
      score();
  }
  else if (userInput === 'paper' && computersChoice === 'rock') {
      alert('You win! Paper cover rock');
      userScore ++;
      document.getElementById("userScore").innerHTML = parseInt(userScore);
      score();
  }
  else if (userInput === 'scissors' && computersChoice === 'paper'){
      alert('You win! scissors cut paper');
      userScore ++;
      document.getElementById("userScore").innerHTML = parseInt(userScore);
      score();
  }
    else { alert('Its a Draw.');}
}

let score = function() {
    if (computerScore > 4) {
        alert('Game Over, you lost. start a new game');
        computerScore = 0;
        userScore = 0;
        document.getElementById("computerScore").innerHTML = parseInt(computerScore);
        document.getElementById("userScore").innerHTML = parseInt(userScore);
    }
    else if (userScore > 4) {
        alert('You won! Start a new game');
        computerScore = 0;
        userScore = 0;
        document.getElementById("computerScore").innerHTML = parseInt(computerScore);
        document.getElementById("userScore").innerHTML = parseInt(userScore);
        
    }
    else { 
        
    }
}








