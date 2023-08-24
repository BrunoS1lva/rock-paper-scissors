let userWins = 0;
let botWins = 0;
let numberBattles = 0;

//Getting the elements from the html
let rockBtn = document.getElementById("rock-btn");
let scissorsBtn = document.getElementById("scissors-btn");
let paperBtn = document.getElementById("paper-btn");

//Adding the eventListener to every button
rockBtn.addEventListener("click", rockAttack);
scissorsBtn.addEventListener("click", scissorsAttack);
paperBtn.addEventListener("click", paperAttack);

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
  gameOn("rock");
}
function scissorsAttack() {
  gameOn("scissors");
}
function paperAttack() {
  gameOn("paper");
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

function battle(battleWinner) {
  if (battleWinner == "player") {
    userWins++;
    console.log(userWins);
  } else if (battleWinner == "bot") {
    botWins++;
    console.log(botWins);
  }

  if (userWins == 3) {
    alert(`You won the match! You are a master of Rock Paper Scissors!!`);
  } else if (botWins == 3) {
    alert("The computer wins this time!");
  }
}


//todo
//battle number
//put the result in a box where you can scroll
//after three battles, the B03 wins!
