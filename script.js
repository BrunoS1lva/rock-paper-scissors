// let wins = 0;

//Getting the elements from the html
let rockBtn = document.getElementById("rock-btn");
let scissorsBtn = document.getElementById("scissors-btn");
let paperBtn = document.getElementById("paper-btn");

//Adding the eventListener to every button
rockBtn.addEventListener("click", userChoiceDecider(rock));
scissorsBtn.addEventListener("click", userChoiceDecider(scissors));
paperBtn.addEventListener("click", userChoiceDecider(paper));


let botChoice = botChoiceMaker();

function botChoiceMaker() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return (botChoice = "rock");
      break;
    case 1:
      return (botChoice = "scissors");
      break;
    case 2:
      return (botChoice = "paper");
      break;
    default:
      alert("ERROR! 💀");
  }
}

let userAttack = userChoiceDecider();

function userChoiceDecider(attack) {
  return attack; 
}
function gameOn(userAttack){
  if(userAttack == 'rock' && botChoice == 'scissors'){
    resultMaker(userAttack, botChoice, won)
  } else if (userAttack === 'scissors' && botChoice === 'paper') {
    resultMaker(userAttack, botChoice, won);
  } else if (userAttack === 'paper' && botChoice === 'rock') {
    resultMaker(userAttack, botChoice, won);
  } else if (userAttack === botChoice) {
    resultMaker(userAttack, botChoice, tie);
  } else {
    resultMaker(botChoice, userAttack, lost);
  }
}
function resultMaker(userAttack, botChoice, result){
  let resultElement = document.createElement('p');
  let resultText = document.createTextNode(`You ${result} because you chose ${userAttack} and the bot chose ${botChoice}.`)
  let resultContainer = document.getElementById('result-container');
  resultElement.appendChild(resultText);
  resultContainer.appendChild(resultElement);
}

// function resultMaker(winner, loser) {
//   console.log(winner + ' beats ' + loser + '. ' + winner + ' wins!');
// }