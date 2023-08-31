
let userWins = 0;
let botWins = 0;
let numberBattles = 0;

//Getting the elements from the html
let rockBtn = document.getElementById("rock-btn");
let scissorsBtn = document.getElementById("scissors-btn");
let paperBtn = document.getElementById("paper-btn");
let reloadBtn = document.getElementById("try-again-btn")

  rockBtn.disable = false;
  scissorsBtn.disable = false;
  paperBtn.disable= false;

//Adding the eventListener to every button
rockBtn.addEventListener("click", rockAttack);
scissorsBtn.addEventListener("click", scissorsAttack);
paperBtn.addEventListener("click", paperAttack);
reloadBtn.addEventListener('click', resetGame)

function botChoiceMaker() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "scissors";
      break;
    case 2:
      return "paper";
      break;
    default:
      alert("ERROR! 💀");
  }
}

let botChoice = botChoiceMaker();

function rockAttack() {
  if(!rockBtn.disable){
    gameOn("rock");
  }
}
function scissorsAttack() {
  if(!rockBtn.disable){
    gameOn("scissors");
  }
}
function paperAttack() {
  if(!rockBtn.disable){
    gameOn("paper");
  }
}

function gameOn(userAttack) {
  if (userAttack == "rock" && botChoice == "scissors") {
    battle('player');
    resultMaker(userAttack, botChoice, `WON 🥳`);
  } else if (userAttack === "scissors" && botChoice === "paper") {
    battle('player');
    resultMaker(userAttack, botChoice, `WON 🥳`);
  } else if (userAttack === "paper" && botChoice === "rock") {
    battle('player');
    resultMaker(userAttack, botChoice, `WON 🥳`);
  } else if (userAttack === botChoice) {
    resultMaker(userAttack, botChoice, `TIE`);
  } else {
    battle('bot');
    resultMaker(botChoice, userAttack, `LOST 🥲`);
  }
}
function resultMaker(userAttack, botChoice, result) {
  if (result == "WON 🥳" || result == "LOST 🥲") {
    let resultElement = document.createElement("p");
    let resultText = document.createTextNode(
      `You ${result} because you chose ${userAttack} and the bot chose ${botChoice}.`
    );
    let resultContainer = document.getElementById("result-container");
    resultElement.appendChild(resultText);
    resultContainer.appendChild(resultElement);
  } else {
    let resultElement = document.createElement("p");
    let resultText = document.createTextNode(
      `It's a TIE! because you chose ${userAttack} and the bot chose ${botChoice}.`
    );
    let resultContainer = document.getElementById("result-container");
    resultElement.appendChild(resultText);
    resultContainer.appendChild(resultElement);
  }
}

function disableBtns(){
  rockBtn.disable = true;
  scissorsBtn.disable = true;
  paperBtn.disable= true;

  reloadBtn.style.display = 'block'

  rockBtn.style.backgroundColor = 'black';
  scissorsBtn.style.backgroundColor = 'black';
  paperBtn.style.backgroundColor = 'black';
}

function resetGame(){
  document.location.reload();  // Reload page to start over again
}
function battle(battleWinner) {
  if (battleWinner == "player") {
    userWins++;
    console.log(`The user is winning for ${userWins}`);
  } else if (battleWinner == "bot") {
    botWins++;
    console.log(`The CPU is winning for ${botWins}`);
  }

  if (userWins == 3) {
    swal("You won the match! You are a master of Rock Paper Scissors!!", {
      button: `Let's goo`,
    });
    disableBtns();
  } else if (botWins == 3) {
    swal("SKYNET wins this time!", {
      button: `Better luck next time!`,
    });
    disableBtns();
  }
}


//todo
//battle number
//put the result in a box where you can scroll
//after three battles, the B03 wins!
