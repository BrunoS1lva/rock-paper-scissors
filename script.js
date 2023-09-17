let userWins = 0;
let botWins = 0;
let numberBattles = 0;
let userLifes = 3;
let botLifes = 3;

//Getting the elements from the html
let rockBtn = document.getElementById("rock-btn");
let scissorsBtn = document.getElementById("scissors-btn");
let paperBtn = document.getElementById("paper-btn");
let reloadBtn = document.getElementById("try-again-btn");

let botLifesSpan = document.getElementById("botSpan");
let playerLifesSpan = document.getElementById("userSpan");

rockBtn.disable = false;
scissorsBtn.disable = false;
paperBtn.disable = false;

//Adding the eventListener to every button
rockBtn.addEventListener("click", rockAttack);
scissorsBtn.addEventListener("click", scissorsAttack);
paperBtn.addEventListener("click", paperAttack);
reloadBtn.addEventListener("click", resetGame);

function botChoiceMaker() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "scissors";
    case 2:
      return "paper";
    default:
      alert("ERROR! 💀");
  }
}

function rockAttack() {
  if (!rockBtn.disable) {
    gameOn("rock");
  }
}
function scissorsAttack() {
  if (!rockBtn.disable) {
    gameOn("scissors");
  }
}
function paperAttack() {
  if (!rockBtn.disable) {
    gameOn("paper");
  }
}

function gameOn(userAttack) {
  let botChoice = botChoiceMaker();
  if (userAttack == "rock" && botChoice == "scissors") {
    battle("player");
    resultMaker(userAttack, botChoice, `WON 🥳`);
    numberBattles++;
  } else if (userAttack === "scissors" && botChoice === "paper") {
    battle("player");
    resultMaker(userAttack, botChoice, `WON 🥳`);
    numberBattles++;
  } else if (userAttack === "paper" && botChoice === "rock") {
    battle("player");
    resultMaker(userAttack, botChoice, `WON 🥳`);
    numberBattles++;
  } else if (userAttack === botChoice) {
    resultMaker(userAttack, botChoice, `TIE`);
    numberBattles++;
  } else {
    battle("bot");
    resultMaker(botChoice, userAttack, `LOST 🥲`);
    numberBattles++;
  }
}
function resultMaker(userAttack, botChoice, result) {
  if (result == "WON 🥳" || result == "LOST 🥲") {
    let resultElement = document.createElement("p");
    let resultText = document.createTextNode(
      `ROUND ${numberBattles} | You ${result} because you chose ${userAttack} and the bot chose ${botChoice}.`
    );
    let resultContainer = document.getElementById("result-container");
    resultElement.appendChild(resultText);
    resultContainer.appendChild(resultElement);
  } else {
    let resultElement = document.createElement("p");
    let resultText = document.createTextNode(
      `ROUND ${numberBattles} | It's a TIE! because you chose ${userAttack} and the bot chose ${botChoice}.`
    );
    let resultContainer = document.getElementById("result-container");
    resultElement.appendChild(resultText);
    resultContainer.appendChild(resultElement);
  }
}

function disableBtns() {
  rockBtn.disable = true;
  scissorsBtn.disable = true;
  paperBtn.disable = true;

  reloadBtn.style.display = "block";

  rockBtn.style.backgroundColor = "transparent";
  scissorsBtn.style.backgroundColor = "transparent";
  paperBtn.style.backgroundColor = "transparent";
}

function resetGame() {
  document.location.reload(); // Reload page to start over again
}
function battle(battleWinner) {
  if (battleWinner == "player") {
    userWins++;
    botLifes--;
    lifeChecker(botLifes);
    console.log(`The user is winning for ${userWins}`);
  } else if (battleWinner == "bot") {
    botWins++;
    userLifes--;
    lifeChecker(userLifes);
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
function lifeChecker(undefinedLife){
  if(undefinedLife == botLifes){
    switch(botLifes){
      case 2:
        document.getElementById('botLifes').innerHTML = 'BOT ❤️❤️';
        break;
        case 1:
          document.getElementById('botLifes').innerHTML = 'BOT ❤️';
          break;
          case 0:
            document.getElementById('botLifes').innerHTML = 'BOT ☠️';
            break;
        default:
    }
  }else if(undefinedLife == userLifes){
    switch(userLifes){
      case 2:
        document.getElementById('userLifes').innerHTML = 'YOU ❤️❤️';
        break;
        case 1:
          document.getElementById('userLifes').innerHTML = 'YOU ❤️';
          break;
          case 0:
            document.getElementById('userLifes').innerHTML = 'YOU ☠️';
            break;
        default:
    }
  }
}
